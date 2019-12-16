import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React, { Component } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import Image1 from "../1.jpeg";
import Image2 from "../2.jpeg";
import Image3 from "../3.jpeg";
import Image4 from "../4.jpeg";
import Image5 from "../5.jpeg";

const useStyles = makeStyles(theme => ({
  card: {
    marginLeft: 30
  },
  media: {
    height: 140
  },
  staricon: {
    width: "15px",
    verticalAlign: "middle",
    textAlign: "center"
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function Popular() {
  const classes = useStyles();
  return (
    <div>
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Grid container spacing={2} md={8} xs={12}>
          <Grid item style={{ display: "flex", flexDirection: "row" }}>
            <CardContent style={{ marginRight: "0px" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                PROGRAMMING
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                How to create your first login page with HTML, CSS and
                JavaScript
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                As a child, queering my life gave me choices. The main choice?
                Life over death.
              </Typography>
              <Typography
                variant="body2"
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "20px",
                  fontSize: "14px"
                }}
              >
                Cody Charles in Level
              </Typography>
              <Typography
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "10px",
                  fontSize: "12px"
                }}
              >
                Jun 14 2018 &middot; 4 min read
                <StarIcon className={classes.staricon} />
              </Typography>
            </CardContent>
            <CardMedia
              style={{
                width: "200px",
                marginTop: "20px",
                marginLeft: "5px"
              }}
              alt="img1"
              component="img"
              image="https://miro.medium.com/max/4820/0*JuNwtWyWm8y523Kk"
              title="Image 1"
              height="180"
            />
          </Grid>
          <Grid item style={{ display: "flex", flexDirection: "row" }}>
            <CardContent style={{ marginRight: "0px" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                PROGRAMMING
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                How to create your first login page with HTML, CSS and
                JavaScript
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                As a child, queering my life gave me choices. The main choice?
                Life over death.
              </Typography>
              <Typography
                variant="body2"
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "20px",
                  fontSize: "14px"
                }}
              >
                Cody Charles in Level
              </Typography>
              <Typography
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "10px",
                  fontSize: "12px"
                }}
              >
                Jun 14 2018 &middot; 4 min read
                <StarIcon className={classes.staricon} />
              </Typography>
            </CardContent>
            <CardMedia
              style={{
                width: "200px",
                marginTop: "20px",
                marginLeft: "5px"
              }}
              alt="img1"
              component="img"
              image="https://miro.medium.com/max/5198/1*nIjfoUR90CUKibydNhq_Bw.jpeg"
              title="Image 1"
              height="180"
            />
          </Grid>
          <Grid item style={{ display: "flex", flexDirection: "row" }}>
            <CardContent style={{ marginRight: "0px" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                PROGRAMMING
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                How to create your first login page with HTML, CSS and
                JavaScript
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                As a child, queering my life gave me choices. The main choice?
                Life over death.
              </Typography>
              <Typography
                variant="body2"
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "20px",
                  fontSize: "14px"
                }}
              >
                Cody Charles in Level
              </Typography>
              <Typography
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "10px",
                  fontSize: "12px"
                }}
              >
                Jun 14 2018 &middot; 4 min read
                <StarIcon className={classes.staricon} />
              </Typography>
            </CardContent>
            <CardMedia
              style={{
                width: "200px",
                marginTop: "20px",
                marginLeft: "5px"
              }}
              alt="img1"
              component="img"
              image={Image1}
              title="Image 1"
              height="180"
            />
          </Grid>
          <Grid item style={{ display: "flex", flexDirection: "row" }}>
            <CardContent style={{ marginRight: "0px" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                PROGRAMMING
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                How to create your first login page with HTML, CSS and
                JavaScript
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                As a child, queering my life gave me choices. The main choice?
                Life over death.
              </Typography>
              <Typography
                variant="body2"
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "20px",
                  fontSize: "14px"
                }}
              >
                Cody Charles in Level
              </Typography>
              <Typography
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "10px",
                  fontSize: "12px"
                }}
              >
                Jun 14 2018 &middot; 4 min read
                <StarIcon className={classes.staricon} />
              </Typography>
            </CardContent>
            <CardMedia
              style={{
                width: "200px",
                marginTop: "20px",
                marginLeft: "5px"
              }}
              alt="img1"
              component="img"
              image={Image1}
              title="Image 1"
              height="180"
            />
          </Grid>
        </Grid>
        <Grid
          container
          md={3}
          style={{ marginLeft: "70px", marginTop: "50px" }}
        >
          <Grid>
            <Grid>
              <h2>Popular on Medium</h2>
            </Grid>
            <Grid style={{ display: "flex", flexDirection: "row" }}>
              <Grid>
                <h1 style={{ color: "grey" }}>01</h1>
              </Grid>
              <Grid>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    style={{ fontSize: "14px" }}
                  >
                    A Pride Story: Choosing to Live My Black Fat Queer Life
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    component="p"
                    style={{
                      marginTop: "20px",
                      paddingBottom: "0px",
                      fontSize: "12px"
                    }}
                  >
                    Cody Charles in Level
                  </Typography>
                  <Typography
                    color="black"
                    component="p"
                    style={{
                      marginTop: "10px",
                      fontSize: "10px"
                    }}
                  >
                    a few hours ago &middot; 6 min read{" "}
                    <StarIcon className={classes.staricon} />
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Grid style={{ display: "flex", flexDirection: "row" }}>
              <Grid>
                <h1 style={{ color: "grey" }}>02</h1>
              </Grid>
              <Grid>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    style={{ fontSize: "14px" }}
                  >
                    A Pride Story: Choosing to Live My Black Fat Queer Life
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    component="p"
                    style={{
                      marginTop: "20px",
                      paddingBottom: "0px",
                      fontSize: "12px"
                    }}
                  >
                    Cody Charles in Level
                  </Typography>
                  <Typography
                    color="black"
                    component="p"
                    style={{
                      marginTop: "10px",
                      fontSize: "10px"
                    }}
                  >
                    a few hours ago &middot; 6 min read{" "}
                    <StarIcon className={classes.staricon} />
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Grid style={{ display: "flex", flexDirection: "row" }}>
              <Grid>
                <h1 style={{ color: "grey" }}>03</h1>
              </Grid>
              <Grid>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    style={{ fontSize: "14px" }}
                  >
                    A Pride Story: Choosing to Live My Black Fat Queer Life
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    component="p"
                    style={{
                      marginTop: "20px",
                      paddingBottom: "0px",
                      fontSize: "12px"
                    }}
                  >
                    Cody Charles in Level
                  </Typography>
                  <Typography
                    color="black"
                    component="p"
                    style={{
                      marginTop: "10px",
                      fontSize: "10px"
                    }}
                  >
                    a few hours ago &middot; 6 min read{" "}
                    <StarIcon className={classes.staricon} />
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Grid style={{ display: "flex", flexDirection: "row" }}>
              <Grid>
                <h1 style={{ color: "grey" }}>04</h1>
              </Grid>
              <Grid>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    style={{ fontSize: "14px" }}
                  >
                    A Pride Story: Choosing to Live My Black Fat Queer Life
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    component="p"
                    style={{
                      marginTop: "20px",
                      paddingBottom: "0px",
                      fontSize: "12px"
                    }}
                  >
                    Cody Charles in Level
                  </Typography>
                  <Typography
                    color="black"
                    component="p"
                    style={{
                      marginTop: "10px",
                      fontSize: "10px"
                    }}
                  >
                    a few hours ago &middot; 6 min read{" "}
                    <StarIcon className={classes.staricon} />
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Grid style={{ display: "flex", flexDirection: "row" }}>
              <Grid>
                <h1 style={{ color: "grey" }}>05</h1>
              </Grid>
              <Grid>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    style={{ fontSize: "14px" }}
                  >
                    A Pride Story: Choosing to Live My Black Fat Queer Life
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    component="p"
                    style={{
                      marginTop: "20px",
                      paddingBottom: "0px",
                      fontSize: "12px"
                    }}
                  >
                    Cody Charles in Level
                  </Typography>
                  <Typography
                    color="black"
                    component="p"
                    style={{
                      marginTop: "10px",
                      fontSize: "10px"
                    }}
                  >
                    a few hours ago &middot; 6 min read{" "}
                    <StarIcon className={classes.staricon} />
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
