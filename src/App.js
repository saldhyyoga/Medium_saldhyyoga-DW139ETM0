import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import CobaMap from "./components/CobaMap";
import ArticleDetails from "./components/ArticleDetails";
import Follow from "./components/Follow";
import RelatedArticles from "./components/RelatedArticles";
import Comment from "./components/Comment";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/categorypage" component={CategoryPage} />
          <Route path="/cobamap" component={CobaMap} />
          <Route path="/articledetails" component={ArticleDetails} />
          <Route path="/follow" component={Follow} />
          <Route path="/more" component={RelatedArticles} />
          <Route path="/comment" component={Comment} />
        </Switch>
      </div>
    );
  }
}
