import { Avatar, Button, Paper, Grid, Typography, Container } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./styles.js";
import Input from "./Input";
import Icon from "./Icon";
import GoogleOneTapLogin from 'react-google-one-tap-login';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [showPassword,setShowPassword]=useState(false);
  const [isSignup,setIsSignup]= useState(false);
  const [isGoogleSignIn,setIsGoogleSignIn]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword =()=>setShowPassword(prev => !prev)


  const handleSubmit =()=>{

  }

  const handleChange =()=>{

  }
  const switchMode =()=>{
    setIsSignup(prev => !prev);
    handleShowPassword(false)
  }

  const googleSuccess = async (response)=>{
    console.log(response)
    const token = response

    try {
      dispatch({ type:"AUTH", data: { token }});
      navigate("/")
    } catch (error) {
      console.log(error)
    }

  }
  const googleFailure =(error)=>{
    console.log(error)
    console.log("Google Sing In was unsuccesful. Try Again")
  }
  const googleSingIn =()=>{
    setIsGoogleSignIn(prev => !prev)
    setTimeout(()=>setIsGoogleSignIn(false),5000)
  }


  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={styles.paper} elevation={3}>
        <Avatar sx={styles.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form style={styles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="firstName" label="First Name" handleChange={handleChange}  half />

                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          {isGoogleSignIn && <GoogleOneTapLogin
            onError={(error)=>googleFailure(error)}
            onSuccess={(response) => googleSuccess(response)} 
            googleAccountConfigs={{client_id:"...apps.googleusercontent.com"}} 
          />}
          <Button 
            sx={styles.googleButton}
            onClick={()=>{googleSingIn()}} 
            color="primary"  
            fullWidth startIcon={<Icon />}  
            variant="contained" 
          >
               Google Sign In
          </Button>
          <Button sx={styles.submit} type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="center">
              <Grid>
                <Button onClick={switchMode} >
                  {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sing Up"}
                </Button>
              </Grid>
          </Grid>
        </form>
      </Paper>

    </Container>
  )
}
