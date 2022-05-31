import {Container,AppBar,Typography,Grow,Grid} from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {getPosts} from "./redux/actions/posts"
import travels from "./images/travels.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import styles from "./styles"
function App() {
  const [currentId,setCurrentId]=useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  
  return (
    <Container maxWidth="lg">
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <Typography sx={styles.heading} variant="h2" align="center">Travels</Typography>
        <img style={styles.image} src={travels} alt="travels" height="60" />
      </AppBar>
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
    </Container>
  );
}

export default App;
