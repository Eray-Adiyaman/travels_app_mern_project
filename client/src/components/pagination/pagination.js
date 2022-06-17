import React,{ useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import styles from "./styles";
import { Link } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/posts";

const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state)=> state.posts)
    const dispatch = useDispatch();


   useEffect(()=>{
    if(page) dispatch(getPosts(page))

   },[page])
    

    return(
        <Pagination 
            sx={styles.ul}
            count={numberOfPages}
            page={Number(page)|| 1}
            variant="outlined"
            color="primary"
            renderItem={(item)=> (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    )

}

export default Paginate;