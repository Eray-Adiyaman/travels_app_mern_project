import {Card,CardActions,CardContent,CardMedia,Button,Typography} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import styles from "./styles.js"
import { useDispatch } from "react-redux"
import { deletePost ,likePost} from "../../../redux/actions/posts.js";

export default function Post({ post,setCurrentId }) {
  
  const dispatch = useDispatch();


  return (
    <Card sx={styles.card}>
      <CardMedia sx={styles.media} component="img" image={post.selectedFile} title={post.title} />
      <div style={styles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div style={styles.overlay2}>
        <Button 
          style={{ color: "black" }} 
          size="small" 
          onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div style={styles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag)=> `#${tag}`)}
        </Typography>
      </div>
      <Typography sx={styles.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      <CardContent>
        <Typography color="textSecondary" variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button 
          size="small" 
          color="primary" 
          onClick={()=>dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small"></ThumbUpAltIcon>
          &nbsp; Like &nbsp; {post.likeCount} 
        </Button>
        <Button 
            size="small" 
            color="secondary" 
            onClick={()=> dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small"></DeleteIcon>
          Delete        
        </Button>
      </CardActions>
    </Card>
  );
}
