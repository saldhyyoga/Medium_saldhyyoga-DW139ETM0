import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Article from "./Article";
import "../styles/article.css";

export default class Article4 extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignitems="center"
          spacing={2}
        >
          <Grid lg={4} md={4} sm={6}>
            <Article />
          </Grid>
          <Grid lg={4} md={4} sm={6}>
            <Grid
              container
              direction="column"
              justify="center"
              alignitems="center"
            >
              <Article />
            </Grid>
          </Grid>
          <Grid lg={4} md={4} sm={6}>
            <Article />
          </Grid>
        </Grid>
      </div>
    );
  }
}
