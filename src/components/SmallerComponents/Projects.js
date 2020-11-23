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
    <div id="projects">
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          <OneCard
            heading="Electric Company"
            frontStack="Javascript, ReactJS, HTML5, CSS3"
            backStack=""
            description="to be filled"
            imageUrl={dogImage}
            type="front"
            haveCode="false"
            imageTitle=""
            githubFeUrl=""
            githubBeUrl=""
          />

          <OneCard
            heading="Automobile Insurance"
            frontStack=""
            backStack="Java, Dropwizard, PostgreSQL"
            description="to be filled"
            imageUrl={dogImage}
            type="back"
            haveCode="false"
            imageTitle="random title"
            githubFeUrl="https://dhirajb7.github.io"
            githubBeUrl="https://dhirajb7.github.io"
          />

          <OneCard
            heading="Nutrifi Me"
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
            heading="Dropwizard Starter"
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
            heading="Express JWT MongoDB Starter"
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
            heading="User Management"
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
            heading="External Sorting"
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
            heading="Employee Management"
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
            heading="Product Rating"
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
            heading="Image Search"
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
            heading="MEME Generator"
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
            heading="Press A Key"
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
            heading="Song Search"
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
            heading="Weather App"
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
            heading="RGB Game"
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
            heading="Score Keeper"
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
        </Grid>
      </Container>
    </div>
  );
}

export default Projects;
