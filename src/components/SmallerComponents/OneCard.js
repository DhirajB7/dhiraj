import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
function OneCard(prop) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        id={
          prop.type === "full"
            ? "fullStack"
            : prop.type === "back"
            ? "backEnd"
            : "frontEnd"
        }
        className={classes.card}
      >
        <CardMedia
          className={classes.cardMedia}
          image={prop.imageUrl}
          title={prop.imageTitle}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {prop.heading}
          </Typography>
          <Typography>{prop.description}</Typography>
        </CardContent>
        {prop.haveCode === "true" ? (
          <CardActions>
            <Tooltip
              TransitionComponent={Zoom}
              title="View Source Code in GitHub"
            >
              <Button
                id="viewButton"
                size="small"
                color="primary"
                onClick={() => window.open(prop.githubUrl, "_blank")}
              >
                View
              </Button>
            </Tooltip>
          </CardActions>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}

export default OneCard;
