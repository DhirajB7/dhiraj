import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import OneCardDescription from "./OneCardDescription";
import { Grid } from "@material-ui/core";

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

  const [xs, setXs] = useState();

  const [sm, setSm] = useState();

  const [md, setMd] = useState();

  const [headingName, setHeadingName] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    const res = window.outerWidth;

    if (res > 768) {
      setMd(6);
      setSm(false);
      setXs(false);
      setHeadingName("h4");
      setData("h5");
    } else if (res > 480) {
      setMd(false);
      setSm(12);
      setXs(false);
      setHeadingName("h3");
      setData("h4");
    } else {
      setMd(false);
      setSm(false);
      setXs(12);
      setHeadingName("h3");
      setData("h4");
    }
  }, []);

  return (
    <Grid item xs={xs} sm={sm} md={md}>
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
          <Typography gutterBottom variant={headingName} component="h2">
            <u>{prop.heading}</u>
          </Typography>
          <Typography variant={data} component="h2">
            <OneCardDescription
              type={prop.type}
              frontStack={prop.frontStack}
              backStack={prop.backStack}
              description={prop.description}
            />
          </Typography>
        </CardContent>
        {prop.haveCode === "true" ? (
          <CardActions>
            {prop.type === "full" || prop.type === "front" ? (
              <Tooltip
                TransitionComponent={Zoom}
                title="View Front-End Source Code in GitHub"
              >
                <Button
                  id="frontButton"
                  size="large"
                  color="primary"
                  onClick={() => window.open(prop.githubFeUrl, "_blank")}
                >
                  Front-End
                </Button>
              </Tooltip>
            ) : (
              ""
            )}

            {prop.type === "full" || prop.type === "back" ? (
              <Tooltip
                TransitionComponent={Zoom}
                title="View Back-End Source Code in GitHub"
              >
                <Button
                  id="backButton"
                  size="large"
                  color="primary"
                  onClick={() => window.open(prop.githubBeUrl, "_blank")}
                >
                  Back-End
                </Button>
              </Tooltip>
            ) : (
              ""
            )}
          </CardActions>
        ) : (
          ""
        )}
      </Card>
    </Grid>
  );
}

export default OneCard;
