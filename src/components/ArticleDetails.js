import React, { Component } from "react";
import Navbar from "./Navbar";
import {
  Container,
  Grid,
  Box,
  IconButton,
  Button,
  ButtonGroup,
  Typography
} from "@material-ui/core";
import "../styles/articledetails.css";

export default class ArticleDetails extends Component {
  render() {
    return (
      <div>
        <Navbar Title="Medium" Category="Programming" />
        <Container>
          <Grid container>
            <Grid item>
              <Grid>
                <Box className="Title">Polymorphism with Golang Interfaces</Box>
              </Grid>
              <Grid>
                <Box className="Subtitle">
                  Polymorphism with Golang Interfaces…
                </Box>
              </Grid>
              <Grid item className="AuthorDetails">
                <Grid className="Photo">
                  <Box className="PhotoAuthor">
                    <img
                      alt="Mayank Gupta"
                      src="https://miro.medium.com/fit/c/96/96/2*m20mLJxBBRsPJjNNlRBuXQ.jpeg"
                      style={{ borderRadius: "50%" }}
                    />
                    <Box>
                      <Typography>Mayank Gupta</Typography>
                      <Button>Follw</Button>
                    </Box>
                  </Box>
                </Grid>
                {/* <Grid style={{ marginLeft: "10px" }}>
                  <Grid className="Follow">
                    <Typography>Mayank Gupta</Typography>
                    <Button>Follw</Button>
                  </Grid>
                  <Grid></Grid>
                </Grid> */}
                {/* <Grid className="AuthorName">
                  <Box>Mayank Gupta</Box>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button>Follow</Button>
                  </ButtonGroup>
                  <Grid className="Time"></Grid>
                </Grid>
                <Grid className="Social"></Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
