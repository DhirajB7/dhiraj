import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import OneCard from "./OneCard";
import dogImage from "../images/dog.jpg";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <OneCard
          heading="Image Heading"
          frontStack="ReactJs"
          backStack="Spring Boot"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          type="full"
          haveCode="true"
          imageTitle="random title"
          githubFeUrl="https://dhirajb7.github.io"
          githubBeUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          frontStack="ReactJs"
          backStack="Spring Boot"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          type="front"
          haveCode="true"
          imageTitle="random title"
          githubFeUrl="https://dhirajb7.github.io"
          githubBeUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          frontStack="ReactJs"
          backStack="Spring Boot"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          type="back"
          haveCode="true"
          imageTitle="random title"
          githubFeUrl="https://dhirajb7.github.io"
          githubBeUrl="https://dhirajb7.github.io"
        />
        <OneCard
          heading="Image Heading"
          frontStack="ReactJs"
          backStack="Spring Boot"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          type="full"
          haveCode="false"
          imageTitle="random title"
          githubFeUrl="https://dhirajb7.github.io"
          githubBeUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          frontStack="ReactJs"
          backStack="Spring Boot"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          type="front"
          haveCode="false"
          imageTitle="random title"
          githubFeUrl="https://dhirajb7.github.io"
          githubBeUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          frontStack="ReactJs"
          backStack="Spring Boot"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          type="back"
          haveCode="false"
          imageTitle="random title"
          githubFeUrl="https://dhirajb7.github.io"
          githubBeUrl="https://dhirajb7.github.io"
        />
      </Grid>
    </Container>
  );
}

export default Projects;
