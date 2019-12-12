import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import "../styles/navbar.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import ScrollMenus from "./ScrollMenus";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontSize: 12,
    fontStyle: "Mono"
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className="Appbar">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <h1>
              {props.Title} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{props.Category}
            </h1>
            {/* <div className={props.Category}></div> */}
          </Typography>
          <IconButton aria-label="search" color="black">
            <SearchIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <img
              alt="Saldhy Yoga Prathama"
              src="https://miro.medium.com/fit/c/32/32/0*WD1OUXDPkVUJ1my9.jpg"
              width="32"
              height="32"
            />
          </IconButton>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="outlined">LOGIN</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
