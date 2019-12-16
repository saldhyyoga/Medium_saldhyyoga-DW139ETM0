import React, { Component } from "react";
import { Grid, Container, Box, Typography } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import "../styles/relatedarticles.css";

export default class RelatedArticles extends Component {
  render() {
    return (
      <div>
        <div className="BackgroundColorOuter">
          <Container className="BackgroundColor">
            <Grid container spacing={2}>
              <Grid item md={6} lg={6} xs={12}>
                <Grid className="MoreArticles">
                  <h3>More From Medium</h3>
                  <hr className="HorizonLine" />
                </Grid>

                <Grid item md={6} lg={6} xs={12} className="RelatedArticles">
                  <Grid
                    className="RelatedArticlesBreakpoint"
                    style={{ paddingRight: "30px" }}
                  >
                    <Typography className="FontColor">
                      More from freeCodeCamp.org
                    </Typography>
                    <img
                      src="https://miro.medium.com/max/1080/1*4hU3Xn7wunA81I3v17JIrg.jpeg"
                      className="ImageSize"
                    />
                    <div className="Description">
                      We fired our top talent. Best decision we ever made.
                    </div>
                    <Grid className="Author">
                      <img
                        className="Avatar"
                        alt="Jonathan Solórzano-Hamilton"
                        src="https://miro.medium.com/fit/c/40/40/1*Lll-op4BEsdP7Tvd3Bg1uA.jpeg"
                      />
                      <Grid className="AuthorName">
                        <Typography className="FontSize">
                          Jonathan Solórzano-Hamilto
                        </Typography>
                        <Typography className="FontColor FontSize">
                          Oct 13, 2017 · 8 min read
                        </Typography>
                      </Grid>
                      <Grid className="Bookmark">
                        <div>
                          <ion-icon name="hand"></ion-icon>
                        </div>
                        <div className="BookmarkIcon">
                          <center>
                            <span className="FontColor">129K |</span>
                          </center>
                        </div>
                        <div style={{ paddingLeft: 10 }}>
                          <BookmarkBorderIcon />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    className="RelatedArticlesBreakpoint"
                    style={{ paddingRight: "30px" }}
                  >
                    <Typography className="FontColor">
                      More from freeCodeCamp.org
                    </Typography>
                    <img
                      src="https://miro.medium.com/max/1080/1*4hU3Xn7wunA81I3v17JIrg.jpeg"
                      className="ImageSize"
                    />
                    <div className="Description">
                      We fired our top talent. Best decision we ever made.
                    </div>
                    <Grid className="Author">
                      <img
                        className="Avatar"
                        alt="Jonathan Solórzano-Hamilton"
                        src="https://miro.medium.com/fit/c/40/40/1*Lll-op4BEsdP7Tvd3Bg1uA.jpeg"
                      />
                      <Grid className="AuthorName">
                        <Typography className="FontSize">
                          Jonathan Solórzano-Hamilto
                        </Typography>
                        <Typography className="FontColor FontSize">
                          Oct 13, 2017 · 8 min read
                        </Typography>
                      </Grid>
                      <Grid className="Bookmark">
                        <div>
                          <ion-icon name="hand"></ion-icon>
                        </div>
                        <div className="BookmarkIcon">
                          <center>
                            <span className="FontColor">129K |</span>
                          </center>
                        </div>
                        <div style={{ paddingLeft: 10 }}>
                          <BookmarkBorderIcon />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid className="RelatedArticlesBreakpoint">
                    <Typography className="FontColor">
                      More from freeCodeCamp.org
                    </Typography>
                    <img
                      src="https://miro.medium.com/max/1080/1*4hU3Xn7wunA81I3v17JIrg.jpeg"
                      className="ImageSize"
                    />
                    <div className="Description">
                      We fired our top talent. Best decision we ever made.
                    </div>
                    <Grid className="Author">
                      <img
                        className="Avatar"
                        alt="Jonathan Solórzano-Hamilton"
                        src="https://miro.medium.com/fit/c/40/40/1*Lll-op4BEsdP7Tvd3Bg1uA.jpeg"
                      />
                      <Grid className="AuthorName">
                        <Typography className="FontSize">
                          Jonathan Solórzano-Hamilto
                        </Typography>
                        <Typography className="FontColor FontSize">
                          Oct 13, 2017 · 8 min read
                        </Typography>
                      </Grid>
                      <Grid className="Bookmark">
                        <div>
                          <ion-icon name="hand"></ion-icon>
                        </div>
                        <div className="BookmarkIcon">
                          <center>
                            <span className="FontColor">129K |</span>
                          </center>
                        </div>
                        <div style={{ paddingLeft: 10 }}>
                          <BookmarkBorderIcon />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className="Footer">
          <Grid container className="FooterWrapper">
            <Grid item md={4} lg={4}>
              <h3>Discover Medium</h3>
              <br />
              <div className="FontFooter">
                Welcome to a place where words matter. On Medium, smart voices
                and original ideas take center stage - with no ads in sight.
                Watch
              </div>
            </Grid>
            <Grid item md={4} lg={4}>
              <h3>Make medium yours</h3>
              <br />
              <div className="FontFooter">
                Follow all the topics you care about, and we’ll deliver the best
                stories for you to your homepage and inbox. Explore
              </div>
            </Grid>
            <Grid item md={4} lg={4}>
              <h3>Become a member</h3>
              <br />
              <div className="FontFooter">
                Get unlimited access to the best stories on Medium — and support
                writers while you’re at it. Just $5/month. Upgrade
              </div>
            </Grid>
            <Grid className="FooterMedium">
              <hr className="HorizonLine" />

              <div style={{ display: "flex", flexDirection: "row" }}>
                <a>
                  <h2>Medium </h2>
                </a>

                <div
                  style={{
                    paddingTop: "27px",
                    paddingLeft: "900px",
                    display: "flex",
                    alignItems: "flex-end"
                  }}
                >
                  <span className="LinkFooter">
                    <a>About</a>
                  </span>
                  <span className="LinkFooter">
                    <a>Help</a>
                  </span>
                  <span className="LinkFooter">
                    <a>Legal</a>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
