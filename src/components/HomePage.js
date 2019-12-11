import React, { Component } from "react";
import Navbar from "./Navbar";
import Article4 from "./Article4";
import Post from "./Post";
import Popular from "./Popular";
import CategoryPage from "./CategoryPage";
import { Switch, Route } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ScrollMenus from "./ScrollMenus";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar
          Title="Medium"
          logoMedium="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjS6YKo_qzmAhVCyzgGHaO4CDIQjRx6BAgBEAQ&url=https%3A%2F%2Fmedium.com%2F&psig=AOvVaw3XFbflvNEY-7IM4yFMopMt&ust=1576132785221619"
        />
        <ScrollMenus />
        <Post />
        <Popular />
        {/* <CategoryPage /> */}
      </div>
    );
  }
}
