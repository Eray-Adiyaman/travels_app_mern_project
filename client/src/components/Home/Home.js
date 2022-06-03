import {Container,Grow,Grid} from "@mui/material"
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { getPosts } from "../../redux/actions/posts";
import Posts from "../Posts/Posts"
import Form from "../Form/Form"

export default function Home() {
    const [currentId,setCurrentId]=useState(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch])


  return (
    <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}