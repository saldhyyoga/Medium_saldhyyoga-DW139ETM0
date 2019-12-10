import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch> */}
      </div>
    );
  }
}
