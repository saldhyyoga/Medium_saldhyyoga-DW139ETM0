import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

export default class CategoryPage extends Component {
  render() {
    return (
      <div>
        <Container
          maxWidth="lg"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Grid container spacing={1} md={11} lg={11} xs={12}>
            <Grid item style={{ display: "flex", flexDirection: "row" }}>
              <Typography component="h2" style={{ fontSize: "25px" }}>
                OneZero
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
