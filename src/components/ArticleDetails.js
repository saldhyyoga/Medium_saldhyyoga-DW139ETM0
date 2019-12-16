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
import StarIcon from "@material-ui/icons/Star";
import "../styles/articledetails.css";
import Follow from "./Follow";
import RelatedArticle from "./RelatedArticles";

const staricon = {
  width: "15px",
  verticalAlign: "middle",
  textAlign: "center"
};
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
              <Grid
                item
                className="AuthorDetails"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid className="Photo">
                  <Box className="PhotoAuthor">
                    <img
                      alt="Mayank Gupta"
                      src="https://miro.medium.com/fit/c/96/96/2*m20mLJxBBRsPJjNNlRBuXQ.jpeg"
                      style={{ borderRadius: "50%" }}
                    />
                  </Box>
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "column" }}>
                  <Grid
                    item
                    className="Profile"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "-170px",
                      marginTop: "10px"
                    }}
                  >
                    <Box>
                      <Typography>
                        Mayank Gupta{" "}
                        <button
                          style={{
                            marginLeft: "10px",
                            border: "1px solid purple",
                            color: "purple",
                            background: "white",
                            cursor: "pointer"
                          }}
                        >
                          FOLLOW
                        </button>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "-170px",
                      marginTop: "-13px"
                    }}
                  >
                    <p>
                      Dec 11 · 4 min read
                      <StarIcon style={staricon} />
                    </p>
                    <Box
                      style={{
                        marginLeft: 350,
                        marginTop: 10
                      }}
                    >
                      <ion-icon
                        name="logo-facebook"
                        style={{ fontSize: "30px" }}
                      ></ion-icon>
                      <ion-icon
                        name="logo-twitter"
                        style={{ fontSize: "30px", marginLeft: 15 }}
                      ></ion-icon>
                      <ion-icon
                        name="bookmark"
                        style={{
                          fontSize: "30px",
                          marginLeft: 15
                        }}
                      ></ion-icon>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container className="ImageArticle">
              <Grid item md={6} lg={6} xs={11}>
                <img src="https://miro.medium.com/max/607/1*ERojGMB35dNDZJtgdC-iFw.png" />
              </Grid>
            </Grid>

            <Grid container className="PostArticle">
              <Grid item md={6} lg={6} xs={11}>
                <div className="Paragraph">
                  Interfaces in Golang works in a completely different way as
                  compared to Interfaces in other server-side languages. This
                  document will be guiding you with the use cases and scenarios
                  for Golang Interfaces. Before getting in the depth of the
                  Interfaces in Golang, let's start with basic concepts first.
                  Interfaces in Golang provides a list of Function Signatures
                  that are required to be implemented by any “struct” in order
                  to work with specified Interfaces. Let's see what we mean by
                  the above statement below.
                  <br />
                  <br />
                  <div style={{ fontSize: "18px" }}>
                    If you are new to Golang, probably you need to give the
                    reading to the following article before you start with this
                    one…
                  </div>
                </div>
              </Grid>
            </Grid>

            <Grid container className="RelatedArticle">
              <Grid item md={6} lg={6} xs={11}>
                <Box
                  style={{
                    width: 680,
                    height: 167,

                    marginLeft: 250,
                    boxShadow: "5px 5px 10px #888888",
                    marginTop: "30px",
                    marginBottom: "40px",
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <Box
                    style={{
                      paddingTop: "40px",
                      paddingLeft: "30px",
                      width: 400,
                      height: 200
                    }}
                  >
                    <Typography>
                      Golang Object-Oriented Programming… Everything you want to
                      know about “structs” in Golang…
                      <br />
                      <br /> <b>medium.com</b>
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      src="https://miro.medium.com/max/607/1*ERojGMB35dNDZJtgdC-iFw.png"
                      style={{
                        width: "200px",
                        height: "150px"
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container className="PostArticle">
              <Grid item md={6} lg={6} xs={11}>
                <div className="Paragraph">
                  Features of Interfaces:
                  <br />
                  1.Interfaces define the functional contract
                  <br />
                  2.Interfaces are Types in Golang Let's define a simple
                  <br />
                  Interface for an Employee…
                  <br />
                  <br />
                  <center>
                    <div style={{ fontSize: "12px", color: "grey" }}>
                      https://gist.github.com/Mayankgupta688/896534b9d099d643a74a6192ae3b0f3e
                    </div>
                  </center>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              className="PostArticle"
              style={{ marginBottom: "40px" }}
            >
              <Grid item md={6} lg={6} xs={11}>
                <div className="Paragraph">
                  In the above code, we are adding 2 functions to the “Employee”
                  interface (“GetDetails” and “GetEmployeeSalary”), any
                  struct/type that needs to work with the “Employee” Interface,
                  should contain these function specified as Interface Contract,
                  in order to use the benefits of Interface. <br />
                  <br />
                  We will be now defining a new type “Manager” implementing
                  these contract functions so that it can take benefits of
                  “Employee” Interface.
                  <br />
                  <br />
                  <center>
                    <div style={{ fontSize: "12px", color: "grey" }}>
                      https://gist.github.com/Mayankgupta688/896534b9d099d643a74a6192ae3b0f3e
                    </div>
                  </center>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Follow />
        <RelatedArticle />
      </div>
    );
  }
}
