import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

function Body() {
	return (
		<React.Fragment>
			<p className="skillList" id="intro">
				Hello, Thanks for stopping by. <br></br>
				My name is Dhiraj. I am working as Full Stack Developer.<br></br>
				Below mentioned are information about me.<br></br>
      		</p>

			  <div id = "skill">
			<h4>
				<u className="skillList" >Skill Set</u>
			</h4>
			<ul className="skillList">
				<li>Language - Java, JavaScript, Python</li>
				<li>FrontEnd - React JS, HTML5, CSS3</li>
				<li>
					BackEnd - Spring Boot, Dropwizard, Express JS, PostgreSQL, MongoDB
        </li>
			</ul>
			</div>

			<div id = "project">
			<h4>
				<u>Projects</u>{" "}
				<Tooltip TransitionComponent={Zoom} title="Navigate To Projects">
					<a href="#projects">
						<LinkIcon id="projectLink" />
					</a>
				</Tooltip>
			</h4>
			<p className="skillList">
				Below are few Projects done by me. These Projects are Personal &
				Professional. Front-End Projects are in Blue, Back-End Projects are in
				Green & Full Stack Projects are in Orange.
      </p>
			<p className="skillList">
				<ul>
					<li>
						Personal Project -{" "}
						<ul>
							<li>Source code will be avliable.</li>
							<li>Image not avliable for back-end.</li>
						</ul>{" "}
					</li>
					<li>
						Professional Project -
            <ul>
							<li>Source code will not be avliable.</li>
							<li>Image not be avliable.</li>
						</ul>{" "}
					</li>
				</ul>
			</p>
			</div>

			<div id = "resume">
			<h4>
				<u>Resume & Linkdin</u>
			</h4>
			<p className="skillList">
				Below are Buttons to Download Resume & To Navigate to Linkedin.
      </p>
	  </div>
		</React.Fragment>
	);
}

export default Body;
