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

export default function Post() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: "30px" }}>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <CardMedia
              alt="img1"
              component="img"
              image={Image1}
              title="Image 1"
              height="200"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                A Pride Story: Choosing to Live My Black Fat Queer Life
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
          </Grid>
          <Grid item md={4} lg={4} xs={12} style={{ paddingLeft: "10px" }}>
            <Grid style={{ flexDirection: "row", display: "flex" }}>
              <CardMedia
                style={{ width: "150px" }}
                alt="img2"
                component="img"
                image={Image2}
                title="Image 2"
                height="120"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
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
            <Grid style={{ flexDirection: "row", display: "flex" }}>
              <CardMedia
                style={{ width: "150px" }}
                alt="img3"
                component="img"
                image={Image3}
                title="Image 3"
                height="120"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
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
            <Grid style={{ flexDirection: "row", display: "flex" }}>
              <CardMedia
                style={{ width: "150px" }}
                alt="img1"
                component="img"
                image={Image4}
                title="Image 1"
                height="120"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
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
          <Grid item md={4} xs={12}>
            <CardMedia
              alt="img1"
              component="img"
              image={Image5}
              title="Image 1"
              height="170"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontSize: "16" }}
              >
                Why I Got Breast Implants
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                After a lifetime of looking good for other pe
              </Typography>
              <Typography
                variant="body2"
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "50px"
                }}
              >
                Cody Charles in Level
              </Typography>
              <Typography
                color="black"
                component="p"
                style={{
                  marginLeft: "0px",
                  marginTop: "20px",
                  fontSize: "12px"
                }}
              >
                Jun 14 2018 &middot; 24 min read
                <StarIcon className={classes.staricon} />
              </Typography>
              <Typography
                style={{
                  color: "green",
                  marginLeft: 180,
                  marginTop: 45
                }}
              >
                SEE ALL FEATURED >
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <hr></hr>
      </Container>
    </div>
  );
}
