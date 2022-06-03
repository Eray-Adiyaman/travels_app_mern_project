import { AppBar,Avatar,Button,Toolbar,Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./sytles.js";
import travels from "../../images/travels.png";
import React from "react";


export default function Navbar() {

    const user =null; //dummy

  return (
    <AppBar sx={styles.appBar} position="static" color="inherit">
        <div>
        <Typography component={Link} to="/" sx={styles.heading} variant="h2" align="center">Travels</Typography>
        <img style={styles.image} src={travels} alt="travels" height="60" />
        </div>
        <Toolbar sx={styles.toolbar} >
            {user ? (<div>
                <Avatar sx={styles.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography sx={styles.userName} variant="h6">{user.result.name}</Typography>
                <Button sx={styles.logout} color="secondary" variant="contained" onClick={()=>{}} >Logout</Button>
            </div>) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
      </AppBar>
  )
}
