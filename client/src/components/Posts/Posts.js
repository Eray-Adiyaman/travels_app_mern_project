import Post from "./Post/Post";
import { useSelector } from "react-redux";
import {Grid,CircularProgress } from "@mui/material";

export default function Posts() {
  const posts = useSelector((state)=> state.posts)
  console.log(posts)
  return (
      <>
        
      </>
  )
}
