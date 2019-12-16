import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../../src/App.css";
import "../styles/article.css";

const useStyles = makeStyles({
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
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid>
          <Card className={classes.card} style={{ boxShadow: "none" }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/articledetails" className="linking">
                    A Pride Story: Choosing to Live My Black Fat Queer Life
                  </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  As a child, queering my life gave me choices. The main choice?
                  Life over death.
                </Typography>
              </CardContent>
            </CardActionArea>
            <Typography
              variant="body2"
              color="black"
              component="p"
              style={{
                marginLeft: "10px",
                marginTop: "10px"
              }}
            >
              Cody Charles in Level
            </Typography>
            <Typography
              color="black"
              component="p"
              style={{
                marginLeft: "10px",
                marginTop: "10px"
              }}
            >
              Jun 14 2018 &middot; <StarIcon className={classes.staricon} />
            </Typography>
            {/* <CardActions
        style={{
          display: "block",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <Typography variant="body2" color="black" component="p">
          Cody Charles in Level
        </Typography>
      </CardActions>
      <CardActions>
        <Typography
          variant="body2"
          color="black"
          component="p"
          style={{ display: "block" }}
        >
          Jun 14 2018 &middot;
        </Typography>
      </CardActions> */}
          </Card>
        </Grid>
      </Container>
    </div>
  );
}
