import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import Article from "./Article";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Container>
          <Grid container spacing={3}></Grid>
        </Container> */}
      </div>
    );
  }
}
