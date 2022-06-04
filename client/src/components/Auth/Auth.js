import { Avatar, Button, Paper, Grid, Typography, Container } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./styles";
import Input from "./Input";
import { useState } from "react";
export default function Auth() {
  
  const [showPassword,setShowPassword]=useState(false);

  const isSignup =false;

  const handleShowPassword =()=>setShowPassword(prev => !prev)

  const handleSubmit =()=>{

  }

  const handleChange =()=>{

  }



  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
            <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </Paper>

    </Container>
  )
}
