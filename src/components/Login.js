import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import "../styles/login.css";
import Register from "./Register";
import { Link } from "react-router-dom";
// import { Route, Switch, Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="App-content">
        {/* <Navbar /> */}

        <Typography component="div">
          <Box className="Title" mt={3}>
            Sign in with email
          </Box>
          <Box mt={1} textAlign="center">
            Enter the email address associated with your account
            <br />
            and we'll send a magic link in to your inbox.
          </Box>
        </Typography>
        <Box textAlign="center" mt={2}>
          <TextField
            placeholder="Enter username or email"
            className="SizeTextField"
            helperText="example saldhyyoga or saldhyy@gmail.com"
          />
        </Box>
        <Box textAlign="center" mt={2.5}>
          <TextField
            className="SizeTextField"
            placeholder="Enter password"
            size="large"
            type="password"
          />
        </Box>
        <Box textAlign="center" mt={3}>
          <Button className="Button-style">
            <Link
              to="/homepage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
          </Button>
        </Box>
        <Box textAlign="center" mt={3}>
          Don't have an account ?{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#12af92" }}
          >
            Signup
          </Link>
        </Box>
      </div>
    );
  }
}
