import { AppBar,Avatar,Button,Toolbar,Typography } from "@mui/material";
import { Link,useLocation } from "react-router-dom";
import styles from "./sytles.js";
import travels from "../../images/travels.png";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";

export default function Navbar() {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const logout =()=>{
        dispatch({ type:"LOGOUT" })
        navigate("/auth")
        setUser(null);
    }

    // console.log(user)
    useEffect(() => {
      const token = user?.token;
      
      //LOG OUT THE USER IF JWT 1H TIME EXPIRED
      if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime){
          logout();
        } 
      }
      setUser(JSON.parse(localStorage.getItem("profile")))
      
    }, [location])
    

  return (
    <AppBar sx={styles.appBar} position="static" color="inherit">
        <div style={styles.brandContainer}>
        <Typography component={Link} to="/" sx={styles.heading} variant="h2" align="center">Travels</Typography>
        <img style={styles.image} src={travels} alt="travels" height="60" />
        </div>
        <Toolbar sx={styles.toolbar} >
            {user ? (<div style={styles.profile}>
                <Avatar sx={styles.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                <Typography sx={styles.userName} variant="h6">{user.result.name}</Typography>
                <Button sx={styles.logout} color="secondary" variant="contained" onClick={()=>{logout()}} >Logout</Button>
            </div>) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
      </AppBar>
  )
}
