import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import OneCard from "./OneCard";

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}));

function Projects() {
	const classes = useStyles();
	return (
			<Container id="projects" className={classes.cardGrid} maxWidth="md">
				<Grid container spacing={4}>

					<OneCard
						heading="Nutrifi Me"
						frontStack="REACT JS, SEMANTIC UI, HTML, CSS"
						backStack="JAVA, SPRING BOOT, SPRING SECURITY, MONGO DB"
						description="A User signs up with  name,Calories per day,etc. A User can Track of his/her Calories intake & view history of past Calories."
						imageUrl=""
						type="full"
						haveCode="true"
						imageTitle="Nutrifi Me"
						githubFeUrl="https://github.com/DhirajB7/NutrifyMeFrontEnd"
						githubBeUrl="https://github.com/DhirajB7/NutrifyMeBackEnd"
						/>

					<OneCard
						heading="Dropwizard Template"
						frontStack=""
						backStack="JAVA, DROPWIZARD, POSTGRESQL"
						description="Basic Java Dropwizard Starter Template.Template Has CRUD on Books and 2 Endpoints as example."
						imageUrl=""
						type="back"
						haveCode="true"
						imageTitle="Dropwizard Strater Template"
						githubFeUrl=""
						githubBeUrl="https://github.com/DhirajB7/DropwizardPSSQL"
						/>

					<OneCard
						heading="Express JWT MongoDB Starter"
						frontStack=""
						backStack="JAVASCRIPT, EXPRESS JS, MONGO DB"
						description="Javascript Backend Template using Express JS, Mongo DB. There is An Endpoiont for CRUD of user. This can Be used For Testing Of Template. "
						imageUrl=""
						type="back"
						haveCode="true"
						imageTitle="Express JWT MongoDB Starter Template"
						githubFeUrl=""
						githubBeUrl="https://github.com/DhirajB7/NodeExpressMongoDBJwtStarterTemplate"
						/>

					<OneCard
						heading="Employee Management"
						frontStack="REACT JS, BOOTSTRAP, HTML, CSS"
						backStack="JAVASCRIPT, EXPRESS JS, MONGO DB"
						description="Application For Employee Management where Detail Of an Employee Can be Added, Deleted, Sorted, Edited & Searched."
						imageUrl=""
						type="full"
						haveCode="true"
						imageTitle="User Management Application"
						githubFeUrl="https://github.com/DhirajB7/UserProjectFrontend"
						githubBeUrl="https://github.com/DhirajB7/UserProjectBackend"
						/>

					<OneCard
						heading="External Sorting"
						frontStack=""
						backStack="JAVA"
						description="To Sort data significantly greater than RAM. Java is Used to Implement Same. A large File of data is generated and then sorted by K way Merge sort. With minor modifications, and files can be taken and sorting can be performed."
						imageUrl=""
						type="back"
						haveCode="true"
						imageTitle="External Sorting Of Huge File In Memory"
						githubFeUrl=""
						githubBeUrl="https://github.com/DhirajB7/ExternalSortingStrings"
						/>

					<OneCard
						heading="Data Management"
						frontStack=""
						backStack="PYTHON, SQLITE DB"
						description="Maintain Record of All Employees/Students/Users in SQLITE DB. SQLite is used as DB, Python is used to Create required classes and CRUD operation. In CLI user is given options and how to perform operations."
						imageUrl=""
						type="back"
						haveCode="true"
						imageTitle="Data Management - user or employee or student Management"
						githubFeUrl=""
						githubBeUrl="https://github.com/DhirajB7/EmployeeManagementSystem"
						/>

					<OneCard
						heading="Product Rating"
						frontStack=""
						backStack="JAVA, SPRING BOOT, MONGO DB"
						description="User Can Buy A Product & Rate From 1 to 5. Rating Can Be Added, Changed & Deleted for a product."
						imageUrl=""
						type="back"
						haveCode="true"
						imageTitle="Product Rating BAckend Service"
						githubFeUrl=""
						githubBeUrl="https://github.com/DhirajB7/ProductRatingBackend"
						/>

					<OneCard
						heading="Image Search"
						frontStack="REACT JS, SEMANTIC UI, HTML, CSS"
						backStack=""
						description="Image Search Engine Application. Enter any Word & Images will be Displayed which can be saved."
						imageUrl=""
						type="front"
						haveCode="true"
						imageTitle="Image Search Application"
						githubFeUrl="https://github.com/DhirajB7/ImageSearch"
						githubBeUrl=""
						/>

					<OneCard
						heading="MEME Generator"
						frontStack="REACT JS, HTML, CSS"
						backStack=""
						description="Enter Text & select Image or vice versa to Generate MEME"
						imageUrl=""
						type="front"
						haveCode="true"
						imageTitle="Generates MEME When Text is Entered"
						githubFeUrl="https://github.com/DhirajB7/MemeGenerator"
						githubBeUrl=""
					/>

					<OneCard
						heading="Press A Key"
						frontStack="HTML, CSS, JAVASCRIPT & PAPER JS"
						backStack=""
						description="Press a Key A-Z. Each Key Produces Sound as well as Visual Effect."
						imageUrl=""
						type="front"
						haveCode="true"
						imageTitle="Similar To Pat-a-tap"
						githubFeUrl="https://github.com/DhirajB7/Press_A_Key"
						githubBeUrl=""
					/>

					<OneCard
						heading="Song Search"
						frontStack="REACT JS, ANT DESIGN, STYLED COMPONENTS, HTML, CSS"
						backStack=""
						description="Enter Artist or Album or Song Name. Related Information will be Shown."
						imageUrl=""
						type="front"
						haveCode="true"
						imageTitle="SONG SEARCH APPLICATION"
						githubFeUrl="https://github.com/DhirajB7/SongSearch"
						githubBeUrl=""
					/>

					<OneCard
						heading="RGB Game"
						frontStack="HTML, CSS & JAVASCRIPT"
						backStack=""
						description="Game has RGB values and Color should be guessed. Game has Easy, Medium & Hard Level."
						imageUrl=""
						type="front"
						haveCode="true"
						imageTitle="Color Guessing Game"
						githubFeUrl="https://github.com/DhirajB7/fun-RGB-game"
						githubBeUrl=""
					/>

					<OneCard
						heading="Score Keeper"
						frontStack="HTML, CSS, BOOTSTRAP & JAVASCRIPT"
						backStack=""
						description="UI Application to keep Track of Score of 2 players/ teams.Winning Score can be set & Score can be Reset."
						imageUrl=""
						type="front"
						haveCode="true"
						imageTitle="Score Application For 2 Players or 2 Teams."
						githubFeUrl="https://github.com/DhirajB7/TwoPlayerScoreKeeping"
						githubBeUrl=""
					/>

					<OneCard
						heading="GMAT SCORE ANALYSIS"
						frontStack="HTML, CSS & JAVASCRIPT"
						backStack=""
						description="Analysis of Gmate Score.Takes Current Score and Target Score in Quant Section And Verbal Section & produces Visual Graph"
						imageUrl=""
						type="front"
						haveCode="true"
						imageTitle="GMAT SCORE ANALYSIS"
						githubFeUrl="https://github.com/DhirajB7/gmate"
						githubBeUrl=""
					/>
				</Grid>
			</Container>
	);
}

export default Projects;
