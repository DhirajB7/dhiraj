import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Typography } from "@material-ui/core";

function Body() {
	return (
		<React.Fragment>

			<Typography className = "info" variant="h4"  align="left"  paragraph>
				I am Dhiraj, working as Full Stack Developer.
				Thank you for visiting my portfolio.
      		</Typography>

			<Typography className = "info" variant="h5" align="left" paragraph>
				<h4>
					<u>Skill Set</u>
				</h4>
				<ul>
					<li>Language - Java, JavaScript, Python</li>
					<li>FrontEnd - React JS, HTML5, CSS3</li>
					<li>BackEnd - Spring Boot, Dropwizard, Express JS, PostgreSQL, MongoDB</li>
				</ul>
			</Typography>

			<Typography className = "info" variant="h5" align="left" paragraph>

				<h4>
					<u>Projects</u>{" "}
					<Tooltip TransitionComponent={Zoom} title="Navigate To Projects">
						<a href="#projects">
							<LinkIcon id="projectLink" />
						</a>
					</Tooltip>
				</h4>
				<Typography className = "info"  variant="h5" align="left" paragraph>
					Below are few Projects done by me. These Projects are Personal &
					Professional. Front-End Projects are in Blue, Back-End Projects are in
					Green & Full Stack Projects are in Orange.
      			</Typography>

				<Typography className = "info"  variant="h5" align="left" paragraph>
					<ul>
						<li>
							Personal Project - Source code will be avliable.</li>

						<li>
							Professional Project - Source code will not be avliable.</li>

					</ul>
				</Typography>
			</Typography>

			<Typography className = "info"  variant="h5" align="left" paragraph>

				<h4>
					<u>Contact</u>{" "}
					<Tooltip TransitionComponent={Zoom} title="Navigate To Contact Details">
						<a href="#footer">
							<LinkIcon id="projectLink" />
						</a>
					</Tooltip>
				</h4>

					Click on above link to Navigate to contact details.


			</Typography>

			<Typography className = "info"  variant="h5" align="left" paragraph>

				<h4>
					<u>Resume & Linkdin</u>
				</h4>

					Below are Buttons to Download Resume & To Navigate to Linkedin.


			</Typography>
		</React.Fragment>
	);
}

export default Body;
