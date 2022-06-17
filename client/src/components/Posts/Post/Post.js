import {Card,CardActions,CardContent,CardMedia,Button,Typography} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import styles from "./styles.js"
import { useDispatch } from "react-redux"
import { deletePost ,likePost} from "../../../redux/actions/posts.js";

export default function Post({ post,setCurrentId }) {
  
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();


  return (
    <Card sx={styles.card} raised elevation={6}>
      <CardMedia sx={styles.media} image={post.selectedFile} title={post.title} />
      <div style={styles.overlay}>
        <Typography color="beige" variant="h6">{post.name}</Typography>
        <Typography color="beige" variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?._id === post?.creator) && 
        <div style={styles.overlay2}>
          <Button 
            style={{ color: "black" }} 
            size="small" 
            onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      }
      <div style={styles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag)=> `#${tag}`)}
        </Typography>
      </div>
      <Typography sx={styles.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      <CardContent sx={styles.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
        {post.message.split(' ').splice(0, 4).join(' ')}...
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button
          disabled={!user?.result} 
          size="small" 
          color="primary" 
          onClick={()=>dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small"></ThumbUpAltIcon>
          &nbsp; Like &nbsp; {post.likes.length} 
        </Button>
        {(user?.result?._id === post?.creator) && 
          <Button 
              size="small" 
              color="secondary" 
              onClick={()=> dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small"></DeleteIcon>
            Delete        
          </Button>
        }
      </CardActions>
    </Card>
  );
}
