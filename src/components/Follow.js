import React, { Component } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "@material-ui/core/Button";
import ButtonFollow from "./ButtonFollow";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import "../styles/follow.css";

export default class Follow extends Component {
  render() {
    return (
      <div>
        <div className="Container">
          <div className="ContainerButton">
            <button variant="contained" color="grey" className="Buttons">
              Programming
            </button>
            <button variant="contained" color="grey" className="Buttons">
              Software Development
            </button>
            <button variant="contained" color="grey" className="Buttons">
              Education
            </button>
            <button variant="contained" color="grey" className="Buttons">
              Advice and Opinion
            </button>
            <button variant="contained" color="grey" className="Buttons">
              Tech
            </button>
          </div>
          <div className="Claps">
            <ion-icon name="hand"></ion-icon>
            <span className="ClapsCounter">10.109 Claps</span>
            <div className="Social">
              <span className="PaddingSocial">
                <TwitterIcon />
              </span>
              <span className="PaddingSocial">
                <FacebookIcon />
              </span>
              <span className="PaddingSocial">
                <BookmarkBorderIcon />
              </span>
              <span className="PaddingSocial">
                <MoreHorizIcon />
              </span>
            </div>
          </div>
          <hr />

          <div className="Claps">
            <img
              src="https://image.flaticon.com/icons/png/512/145/145843.png"
              style={{
                width: 80,
                height: 80,
                paddingLeft: 20,
                paddingTop: 10,
                cursor: "pointer"
              }}
            />
            <div className="WrittenBy">
              <div className="Grey">WRITTEN BY</div>
              <div>Jonathan Bluks</div>
              <div className="Grey">Jonathan FLuks</div>
            </div>

            <div className="buttonfollow">
              <Button variant="outlined" color="primary">
                FOLLOW
              </Button>
            </div>
          </div>

          <div className="Claps">
            <img
              src="https://image.flaticon.com/icons/png/512/145/145843.png"
              style={{
                width: 80,
                height: 80,
                paddingLeft: 20,
                paddingTop: 10,
                cursor: "pointer"
              }}
            />
            <div className="WrittenBy">
              <div className="Grey">WRITTEN BY</div>
              <div>Jonathan Bluks</div>
              <div className="Grey">Jonathan FLuks</div>
            </div>

            <div className="buttonfollow">
              <Button variant="outlined" color="primary">
                FOLLOW
              </Button>
            </div>
          </div>
          <hr />
          <div>
            <Button variant="outlined" color="primary" className="SeeResponse">
              FOLLOW
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
