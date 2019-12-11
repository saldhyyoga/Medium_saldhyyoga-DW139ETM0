import React, { Component } from "react";
import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import Logo from "../mediumlogo.svg";
import "../styles/categorypage.css";

export default class CategoryPage extends Component {
  constructor() {
    super();

    this.state = {
      postitems: [
        {
          title: "The Case for Removing All Politicians From Twitter",
          pieceofcontent: "Political omnipresence has gone too far",
          author: "Robert Howell",
          time: "Dec 11 · 5 min read",
          photourl:
            "https://miro.medium.com/max/5184/1*11AJIbhFAuf_YHf14jiKhQ.jpeg"
        },
        {
          title:
            "Uber Delivery Workers in Mexico Track Thieves Through a Secret WhatsApp Network",
          pieceofcontent:
            "A 1,000-person WhatsApp community keeps delivery workers safe",
          author: "Martha Pskowski",
          time: "Dec 11 · 9 min read",
          photourl:
            "https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg"
        },
        {
          title:
            "A New Smart Contact Lens Can Charge Wirelessly Without Burning Your Eyeballs",
          pieceofcontent:
            "The technology uses supercapacitors and will help speed the creation of contacts lenses that monitor the body",
          author: "Yasmin Tayag",
          time: "Dec 11 · 3 min read",
          photourl:
            "https://miro.medium.com/max/559/1*-8KL6r_tNZ9B2Lfz_9dc0Q.png"
        },
        {
          title: "‘I Felt Like a Time Traveler’: 6 Months Without the Internet",
          pieceofcontent:
            "The artist Nastja Säde Rönkkö talks about what life was like when she utterly disconnected from the online world for half a year",
          author: "Thomas McMullan",
          time: "Dec 11 · 5 min read",
          photourl:
            "https://miro.medium.com/max/5747/1*csm12WLUqj53wH7gajw8Rg.jpeg"
        },
        {
          title:
            "If It’s OK to Fantasize About Someone You Know, Why Not in VR?",
          pieceofcontent:
            "Erotic deepfakes are only going to make the question of sexual ethics muddier and more confusing",
          author: "Lux Alptraum",
          time: "Dec 11 · 5 min read",
          photourl:
            "https://miro.medium.com/max/6300/1*Tc40NLUUtVafKwrl28VBrQ.jpeg"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Navbar
          Title="Medium"
          style={{ boxShadow: "-10px 9px 11px -4px rgba(0,0,0,0.59)" }}
        />
        <Container maxWidth="lg">
          <div>
            <Grid container spacing={1}>
              <Grid
                item
                md={11}
                lg={11}
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Box className="Container1">
                  <img src="https://miro.medium.com/max/270/1*cw32fIqCbRWzwJaoQw6BUg.png"></img>
                </Box>
                <Box className="Container2">
                  <Typography>
                    <span className="subtitle">
                      The front lines of the future. &nbsp;
                    </span>
                    <span className="subtitle2">
                      A Medium publication about
                      <br /> tech and science.
                    </span>
                  </Typography>
                </Box>
                <Box className="Container3">
                  <button className="ButtonFollow">FOLLOW</button>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid item md={12} lg={12} className="SecondGrid">
                <Box className="BoxContainer1">
                  <img src="https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg" />
                </Box>
                <Box className="BoxContainer2">
                  <Box className="Text1">The Influencer and the Hit Man</Box>
                  <Box className="Text2">
                    How a years-long domain name feud ended in a bloody shootout
                  </Box>
                  <Box className="Text3">
                    <span className="IanFrisch">Ian Frisch</span>
                    <br />
                    Dec 10 &middot; 24 min read
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={0}>
              <Grid item md={12} lg={12} className="ThirdGrid">
                <Box className="BoxContainer3">
                  <Box className="Text4">
                    A Googler Explains Exactly How the Pixel 4 Captures the
                    Night Sky
                  </Box>
                  <Box className="Text5">
                    We went stargazing with project manager Alex Schiffhauer to
                    learn more about the new phone’s astrophotography mode
                  </Box>
                  <Box className="Text6">
                    <span className="Aaron">Aaron Gell</span>
                    <br />
                    Dec 13 &middot; 4 min read
                  </Box>
                </Box>
                <Box className="BoxContainer4">
                  <img src="https://miro.medium.com/max/1200/1*MDxT8MJL3DmelDMv3-gd9A.gif" />
                </Box>
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={0}>
              <Grid item md={12} lg={12} className="SecondGrid">
                <Box className="BoxContainer1">
                  <img src="https://miro.medium.com/max/695/0*LG1uUR7TbMplW8xf" />
                </Box>
                <Box className="BoxContainer2">
                  <Box className="Text1">
                    Mood-Altering Wearables Are Silicon Valley’s Newest Delusion
                  </Box>
                  <Box className="Text2">
                    How a years-long domain name feud ended in a bloody shootout
                  </Box>
                  <Box className="Text3">
                    <span className="IanFrisch">Ian Frisch</span>
                    <br />
                    Dec 10 &middot; 24 min read
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={0}>
              <Grid item md={12} lg={12} className="ThirdGrid">
                <Box className="BoxContainer3">
                  <Box className="Text4">
                    How to Totally Escape Ad Tracking at Home
                  </Box>
                  <Box className="Text5">
                    Shutting down ad trackers at the network level is difficult,
                    but not impossible
                  </Box>
                  <Box className="Text6">
                    <span className="Aaron">Aaron Gell</span>
                    <br />
                    Dec 13 &middot; 4 min read
                  </Box>
                </Box>
                <Box className="BoxContainer4">
                  <img src="https://miro.medium.com/max/3840/1*yYP8rlvTuCML1_N9AlQOTg.jpeg" />
                </Box>
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={0}>
              <Grid item md={11} lg={12}>
                <Box className="FourGrid">
                  <Box className="FourGridText1">
                    "We have a few new things to share"
                  </Box>
                  <span style={{ fontSize: "16px" }} className="FourGridText1">
                    — Damon Beres
                  </span>
                  <Box className="FourGridText2">
                    Welcome to a Refreshed OneZero{" "}
                  </Box>
                  <Box className="FourGridText3">Dec 3 · 2 min read</Box>
                </Box>
              </Grid>
            </Grid>
          </div>

          {/* <div>
            <center>
              <hr
                style={{
                  marginLeft: "auto",
                  marginTop: "40px",
                  marginBottom: "30px",
                  width: "680px"
                }}
              />
            </center>
            <Grid container>
              <Grid item md={8} lg={8} className="OuterGrid">
                <Grid className="PostItem">
                  <Box className="PostTitle">
                    The Case for Removing All Politicians From Twitter
                  </Box>
                  <Box className="PieceOfContent">
                    Political omnipresence has gone too far
                  </Box>
                  <Box className="Author">Robert Howell</Box>
                  <Box className="Time">Dec 11 · 5 min read</Box>
                </Grid>
                <Grid className="Photo">
                  <img src="https://miro.medium.com/max/5184/1*11AJIbhFAuf_YHf14jiKhQ.jpeg" />
                </Grid>
              </Grid>
            </Grid>
          </div> */}

          {this.state.postitems.map(item => {
            return (
              <div>
                <div>
                  <center>
                    <hr
                      style={{
                        marginLeft: "auto",
                        marginTop: "40px",
                        marginBottom: "30px",
                        width: "680px"
                      }}
                    />
                  </center>
                  <Grid container>
                    <Grid item md={8} lg={8} className="OuterGrid">
                      <Grid className="PostItem">
                        <Box className="PostTitle">{item.title}</Box>
                        <Box className="PieceOfContent">
                          {item.pieceofcontent}
                        </Box>
                        <Box className="Author">{item.author}</Box>
                        <Box className="Time">{item.time}</Box>
                      </Grid>
                      <Grid className="Photo">
                        <img src={item.photourl} />
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
    );
  }
}
