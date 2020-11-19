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
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.in"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.com"
        />
        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.in"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.com"
        />
        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.in"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.com"
        />
        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.in"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.com"
        />
        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.io"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.in"
        />

        <OneCard
          heading="Image Heading"
          description="Image Description Image Description Image Description Image Description"
          imageUrl={dogImage}
          imageTitle="random title"
          githubUrl="https://dhirajb7.github.com"
        />
      </Grid>
    </Container>
  );
}

export default Projects;
