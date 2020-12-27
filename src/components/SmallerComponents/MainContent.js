import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Body from "./Body";
import { linkedInUrl, name } from "../Constant";
import resumePdf from "../images/resume.pdf";

const useStyles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
}));
function MainContent() {
	const classes = useStyles();
	const fileName = name.toUpperCase() + " Resume.pdf";
	return (
		<div className={classes.heroContent}>
			<Container maxWidth="md">
				<Typography variant="h5" align="left" paragraph>
					<Body />
				</Typography>
				<div className={classes.heroButtons}>
					<Grid container spacing={2} justify="left">
						<Grid item>
							<a
								id="downloadLink"
								href={resumePdf}
								target="_blank"
								rel="noreferrer"
								download={fileName}
							>
								<Button id="buttonDownload" variant="contained" color="primary">
									Download Resume
                				</Button>
							</a>
						</Grid>
						<Grid item>
							<Button
								variant="outlined"
								color="primary"
								onClick={() => window.open(linkedInUrl, "_blank")}
							>
								go to Linkedin
              				</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
}

export default MainContent;
