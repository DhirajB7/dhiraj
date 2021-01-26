import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Body from "./Body";
import Buttons from "./Buttons";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));
function MainContent(props) {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography variant="h5" align="left" paragraph>
          <Header />
          <Body show={props.show} />
        </Typography>
        <div className={classes.heroButtons} hidden={!props.show}>
          <Buttons />
        </div>
      </Container>
    </div>
  );
}

export default MainContent;
