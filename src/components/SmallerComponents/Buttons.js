import React from "react";
import { Grid, Button } from "@material-ui/core";
import { linkedInUrl, name } from "../Constant";
import resumePdf from "../images/resume.pdf";

function Buttons() {
	const fileName = name.toUpperCase() + " Resume.pdf";
	return (
		<React.Fragment>
			<Grid container spacing={2} justify="center">
				<Grid item>
					<a
						id="downloadLink"
						href={resumePdf}
						target="_blank"
						rel="noreferrer"
						download={fileName}
					>
						<Button id="buttonDownload" size="large" variant="contained" color="primary">
							Download Resume
                				</Button>
					</a>
				</Grid>
				<Grid item>
					<Button
						size="large"
						variant="outlined"
						color="primary"
						onClick={() => window.open(linkedInUrl, "_blank")}
					>
						Go To Linkedin
              				</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	)

}

export default Buttons;