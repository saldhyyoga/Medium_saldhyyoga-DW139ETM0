import React, { Component } from "react";
import Navbar from "./Navbar";
import Article4 from "./Article4";
import Post from "./Post";
import Popular from "./Popular";
import CategoryPage from "./CategoryPage";
import { Switch, Route } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Post />
        <Popular />
        <CategoryPage />
      </div>
    );
  }
}
