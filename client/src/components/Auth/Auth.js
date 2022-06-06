import { Avatar, Button, Paper, Grid, Typography, Container } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./styles.js";
import Input from "./Input";
import Icon from "./Icon";
import { GoogleLogin } from "react-google-login";
import { useState } from "react";

export default function Auth() {
  const [showPassword,setShowPassword]=useState(false);
  const [isSignup,setIsSignup]= useState(false);

  const handleShowPassword =()=>setShowPassword(prev => !prev)

  const handleSubmit =()=>{

  }

  const handleChange =()=>{

  }
  const switchMode =()=>{
    setIsSignup(prev => !prev);
    handleShowPassword(false)
  }

  const googleSuccess = async (res)=>{
    console.log(res)
  }
  const googleFailure =(error)=>{
    console.log(error)
    console.log("Google Sing In was unsuccesful. Try Again")
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
          <GoogleLogin 
            clientId="...apps.googleusercontent.com" //dotenv here
            scope="email"
            render={(renderProps) => (
            <Button sx={styles.googleButton} color="primary"  fullWidth onClick={renderProps.onClick}  disabled={renderProps.disabled}  startIcon={<Icon />}  variant="contained" >
               Google Sign In
            </Button>)}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
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
