import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setegid } from "process";
import { useRouter } from "next/router";

type Props = {};

const SignupPage = (props: Props) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 320,
    margin: "0 auto",
  };
  const { user, signup } = useAuth();

  const router = useRouter();
  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(email, password);
    } catch (error) {}
    console.log("email:", email, "pass:", password);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("error here");
  const [message, setMessage] = useState("message here");

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });

  return (
    <Container>
      <Paper style={paperStyle}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={5}
        >
          <form onSubmit={handleSignup}>
            <TextField
              label="Email"
              variant="outlined"
              placeholder="Email"
              fullWidth
              sx={{ margin: "5px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              placeholder="Password"
              fullWidth
              sx={{ margin: "5px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
            <Typography color="blue">{message}</Typography>
            <Typography color="red">{error}</Typography>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SignupPage;
