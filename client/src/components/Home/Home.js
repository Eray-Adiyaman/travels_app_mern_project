import {Container,Grow,Grid,Paper,AppBar,TextField,Button,Chip,Autocomplete} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState, } from "react";
import {  getPostsBySearch } from "../../redux/actions/posts";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../pagination/pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import styles from "./styles"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Home() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search,setSearch]=useState("");
  const [tags,setTags]=useState([]);


  
  const searchPost =()=>{
    if(search.trim().length !== 0 || tags.length !== 0 ){
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }))
      navigate(`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`)
    }else{
      navigate("/")
    }
  }

  const handleKeyPress = (e) =>{
    if(e.keyCode ===13){
      searchPost();
    }
  }


  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          sx={styles.GridContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar sx={styles.AppBarSearch} position="static" color="inherit">
              <TextField
                name="search"
                variant="outlined"
                label="Search Post"
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
              />
            <Autocomplete
            sx={styles.Autocomplete}
            multiple
            onChange={(e, value) => setTags((state) => value)}
            id="tags-filled"
            options={[]}
            defaultValue={[]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Search By Tag"
                placeholder="tags"
              />
            )}
          />
          <Button sx={styles.searchButton} color="primary" variant="contained" onClick={searchPost}>Search</Button>   
          </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && (
            <Paper sx={styles.pagination} elevation={6}>
              <Pagination  page={page} />
            </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
