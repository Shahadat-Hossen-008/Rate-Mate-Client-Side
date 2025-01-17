import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import {  MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AuthContext from "../../Context/AuthContext";
import GoogleButton from "../../Component/SocialLoginButton/GoogleButton";
import toast from "react-hot-toast";


function Login() {
  const theme = useTheme();
  const {setUser, signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result =>{
        const user = result.user;
        setUser(user);
        navigate(from ,{replace: true})
        
        
    })
    .catch(error=>{
        toast.error(error.message);
        
    })
    
    
    
  }
  return (
    <div>
      <Container component="main" maxWidth="xs" className="shadow-lg p-20 mt-10">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Title */}
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            {/* Email Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/* Password Field */}
            <FormControl variant="outlined" fullWidth required>
              <TextField
                margin="normal"
                name="password"
                label="Password"
                type={showPassword ?  "password":"text" }
                id="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ?   <MdVisibilityOff />: <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            {/* Sign In Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <p>
              "Don't have an account? " <Link to="/register" className="text-blue-500">Sign Up</Link>
            </p>
          </Box>
        </Box>
        <GoogleButton></GoogleButton>
      </Container>
    </div>
  );
}

export default Login;
