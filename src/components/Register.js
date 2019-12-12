import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
import Login from "./Login";

export default class Register extends Component {
  render() {
    return (
      <div className="FormRegister">
        <div className="BoxRegister">
          <Typography component="div">
            <center>
              <div style={{ fontSize: "32px" }}>Sign in with Email</div>
            </center>
            <Box mt={1} textAlign="center">
              create an account to receive great medium stories in your inbox
              <br />
              personalize your homepage, and follow authors
              <br />
              and topics that you love.
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
                Register
              </Link>
            </Button>
          </Box>
          <Box textAlign="center" mt={3}>
            Already have an account ?{" "}
            <Link
              to="/login"
              style={{ color: "#12af92", textDecoration: "none" }}
            >
              Signin
            </Link>
          </Box>
          <Box textAlign="center" mt={2}>
            To make Medium work,we log user data and share it with service
          </Box>
          <Box textAlign="center">
            Providers. Click "Sign Up" above to accept
          </Box>
          <Box textAlign="center">
            Medium's Term of Service & Privacy Policy
          </Box>
        </div>
      </div>
    );
  }
}
