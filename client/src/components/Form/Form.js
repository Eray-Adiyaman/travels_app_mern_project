import {TextField,Button,Typography,Paper} from "@mui/material";
import { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import styles from "./styles";
import { useDispatch,useSelector } from "react-redux";
import { createPost ,updatePost} from "../../redux/actions/posts";

export default function Form({currentId,setCurrentId}) {
  const [postData,setPostData] =useState({
    creator:"",
    title:"",
    message:"",
    tags:"",
    selectedFile:""
  })
  const post= useSelector((state)=> currentId ? state.posts.find((post)=> post._id === currentId) : null)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(post) setPostData(post)
  },[post])

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,postData))
    }else{
      dispatch(createPost(postData))
    }
    clear();
  }

  const clear = ()=>{
      setCurrentId(null)
      setPostData({creator:"",title:"",message:"",tags:"",selectedFile:""})
  }

  return (
      <Paper sx={styles.paper}>
        <form style={styles.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? "Editing" : "Create"} Travel Log</Typography>
          <TextField name="creator" variant="outlined" margin="dense" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData,creator: e.target.value})}></TextField>
          <TextField name="title" variant="outlined" margin="dense" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData,title: e.target.value})}></TextField>
          <TextField name="message" variant="outlined" margin="dense" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({...postData,message: e.target.value})}></TextField>
          <TextField name="tags" variant="outlined" margin="dense" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData,tags: e.target.value.split(",")})}></TextField>
          <div style={styles.fileInput}> <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/> </div>
          <Button sx={styles.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear</Button>
        </form>
      </Paper>
  )
}
