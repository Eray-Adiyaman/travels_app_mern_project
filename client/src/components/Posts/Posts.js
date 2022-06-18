import Post from "./Post/Post";
import { useSelector } from "react-redux";
import {Grid,CircularProgress } from "@mui/material";
import styles from "./styles.js"

export default function Posts({setCurrentId}) {
  const {posts,isLoading} = useSelector((state)=> state.posts)
  // console.log(posts)

  if(!posts.length && !isLoading) return "No Posts";

  return (
      isLoading ? <CircularProgress /> : (
      
        <Grid sx={styles.mainContainer} container alignItems="stretch" spacing={3}>
            {posts.map((post)=> (
              <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                  <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
        </Grid>
      )
  )
}
