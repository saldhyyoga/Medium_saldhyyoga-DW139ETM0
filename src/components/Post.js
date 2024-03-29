import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React, { Component } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import Image1 from "../1.jpeg";
import Image2 from "../2.jpeg";
import Image3 from "../3.jpeg";
import Image4 from "../4.jpeg";
import Image5 from "../5.jpeg";

const staricon = {
  width: "15px",
  verticalAlign: "middle",
  textAlign: "center"
};

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postitems: [
        {
          title: "Building a Mobile App in 10 Days with React Native",
          author: "Cody Charles in Level",
          times: "a few hours ago · 6 min read "
        },
        {
          title: "How to Make a Responsive App With React and Bootstrap",
          author: "Cody Charles in Level",
          times: "a few hours ago · 7 min read "
        },
        {
          title: "The Power of the Composite Design Pattern in JavaScript",
          author: "Cody Charles in Level ",
          times: "a few hours ago · 8 min read"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Container maxWidth="lg" style={{ marginTop: "30px" }}>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Link to="/articledetails">
                <CardMedia
                  alt="img1"
                  component="img"
                  image={Image1}
                  title="Image 1"
                  height="200"
                />
              </Link>
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
                  <StarIcon style={staricon} />
                </Typography>
              </CardContent>
            </Grid>

            {/* {this.state.postitems.map(item => {
              return (
                <Grid item md={4} lg={4} xs={12}>
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
                        {item.title}
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
                        {item.author}
                      </Typography>
                      <Typography
                        color="black"
                        component="p"
                        style={{
                          marginTop: "10px",
                          fontSize: "10px"
                        }}
                      >
                        {item.times}
                        <StarIcon style={staricon} />
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              );
            })} */}

            {/* <Grid item md={4} lg={4} xs={12}></Grid> */}

            <Grid item md={4} lg={4} xs={12}>
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
                    Building a Mobile App in 10 Days with React Native
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
                    <StarIcon style={staricon} />
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
                    How to Make a Responsive App With React and Bootstrap
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
                    <StarIcon style={staricon} />
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
                    The Power of the Composite Design Pattern in JavaScript
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
                    <StarIcon style={staricon} />
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
                  <StarIcon style={staricon} />
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
}
