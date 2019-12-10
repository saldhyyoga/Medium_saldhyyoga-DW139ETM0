import React, { Component } from "react";
import Navbar from "./Navbar";
import Article4 from "./Article4";
import Post from "./Post";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Post />
      </div>
    );
  }
}
