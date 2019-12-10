import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import "../styles/register.css";
// import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";

export default class Register extends Component {
  render() {
    return (
      <div className="App-content">
        <Typography component="div">
          <Box className="Title" mt={3}>
            SIGN UP
          </Box>
          <Box mt={1} textAlign="center">
            create an account to receive great medium stories in your inbox
            <br />
            personalize your homepag, and follow authors
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
          <Button className="Button-style">Register</Button>
        </Box>
        <Box textAlign="center" mt={3}>
          Already have an account ? Signin
          {/* <Switch>
            <Route path="/login" component={Login} />
          </Switch> */}
        </Box>
      </div>
    );
  }
}
