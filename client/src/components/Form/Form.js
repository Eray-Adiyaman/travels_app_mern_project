import {TextField,Button,Typography,Paper} from "@mui/material"
import { useState } from "react"
import FileBase from "react-file-base64"
import styles from "./styles"
export default function Form() {
  const [postData,setPostData] =useState({
    creator:"",
    title:"",
    message:"",
    tags:"",
    selectedFile:""
  })

  const handleSubmit =()=>{
  }

  const clear = ()=>{

  }

  return (
      <Paper sx={styles.paper}>
        <form sx={`${styles.root} ${styles.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Create Travel Log</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData,creator: e.target.value})}></TextField>
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData,title: e.target.value})}></TextField>
          <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({...postData,tags: e.target.value})}></TextField>
          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData,tags: e.target.value})}></TextField>
          <div style={styles.fileInput}> <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/> </div>
          <Button sx={styles.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear</Button>
        </form>
      </Paper>
  )
}
