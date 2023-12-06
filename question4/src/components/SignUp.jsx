import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import logo from "../assets/logo.png";
import apiClient from "../services/apiClient";
import BandPractice from "../assets/The Band Concert.png";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp({ setIsLogged, setTotalRatings, totalRatings }) {
  // sets up the user object
  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const navigateTo = useNavigate();
  const [registerError, setRegisterError] = React.useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      userInfo.username &&
      userInfo.password.length >= 8 &&
      userInfo.password === userInfo.confirmPassword
    ) {
      try {
        //resets error if it passes the above conditionals
        setUserInfo((prevState) => ({
          ...prevState,
          usernameError: "",
          passwordError: "",
          confirmPasswordError: "",
        }));

        //converts information into formData so it can be sent to the backend.
        const formData = new FormData();

        formData.append("username", userInfo.username);
        formData.append("password", userInfo.password);

        const { data } = await apiClient.register(formData);

        //successfully inputted into the DB
        if (data === 1) {
          setRegisterError("");
          localStorage.setItem("username", userInfo.username);
          localStorage.setItem("loggedIn", true);
          setIsLogged(true);
          setTotalRatings([]);
          navigateTo("/Rate");
          //unsuccessful
        } else {
          setRegisterError(
            "Something went wrong with registration, please try again!"
          );
        }
      } catch (err) {
        console.log(err);
        setRegisterError(
          "Something went wrong with registration, please try again!"
        );
      }

      setUserInfo((prevState) => ({
        ...prevState,
        username: "",
        password: "",
        confirmPassword: "",
      }));

      //error handling
    } else {
      if (userInfo.username.length === 0) {
        setUserInfo((prevState) => ({
          ...prevState,
          usernameError: "Please enter a valid username.",
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          usernameError: "",
        }));
      }
      if (userInfo.password.length < 8) {
        setUserInfo((prevState) => ({
          ...prevState,
          passwordError: "Please enter a valid password.",
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          passwordError: "",
        }));
        setUserInfo((prevState) => ({
          ...prevState,
          confirmPasswordError: "Your passwords do not match.",
        }));
      }
    }
  }
  return (
    <>
      <Box
        component="img"
        sx={{
          width: "98vw",
          position: "absolute",
          height: "100vh",
          zIndex: "-1",
          objectFit: "contain",
        }}
        alt="The house from the offer."
        src={BandPractice}
      ></Box>
      <Grid sx={{ marginTop: "100px" }}>
        <Paper
          elevation={10}
          style={{
            padding: 20,
            height: "70vh",
            width: 280,
            margin: "20px auto",
          }}
        >
          <Grid align="center">
            <Avatar style={{ backgroundColor: "white" }}>
              <CardMedia
                component="img"
                sx={{ objectFit: "fill" }}
                src={logo}
                alt="Live from space album cover"
              />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <TextField
            {...(userInfo.usernameError ? { error: true } : {})}
            helperText={userInfo.usernameError}
            sx={{ margin: "5px" }}
            label="Username"
            placeholder="Enter username"
            value={userInfo.username}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <TextField
            {...(userInfo.passwordError ? { error: true } : {})}
            helperText={userInfo.passwordError}
            sx={{ margin: "5px" }}
            label="Password"
            placeholder="Enter password"
            type="password"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <TextField
            {...(userInfo.confirmPasswordError ? { error: true } : {})}
            helperText={userInfo.confirmPasswordError}
            sx={{ margin: "5px" }}
            label="Confirm password"
            placeholder="Confirm password"
            value={userInfo.confirmPassword}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                confirmPassword: e.target.value,
              }))
            }
            type="password"
            fullWidth
            required
          />
          <Typography sx={{ color: "red" }}>{registerError}</Typography>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ margin: "8px 0", backgroundColor: "#FFAC4B" }}
            onClick={handleSubmit}
            fullWidth
          >
            Sign Up
          </Button>
          <Typography>
            {" "}
            Already have an account?{" "}
            <Link
              style={{ textDecoration: "none", color: "#FFAC4B" }}
              to="..\signIn"
            >
              Sign In
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
