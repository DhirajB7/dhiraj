import React, { useEffect, useState } from "react";
import LinkIcon from "@material-ui/icons/Link";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Typography } from "@material-ui/core";

function Body(props) {
  const [headingName, setHeadingName] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    const res = window.outerWidth;

    if (res > 768) {
      setHeadingName("h4");
      setData("h5");
    } else if (res > 480) {
      setHeadingName("h3");
      setData("h4");
    } else {
      setHeadingName("h3");
      setData("h4");
    }
  }, []);

  return (
    <React.Fragment>
      <Typography className="info" variant={headingName} align="left" paragraph>
        I am Dhiraj, working as Full Stack Developer. Thank you for visiting my
        portfolio.
      </Typography>

      <Typography className="info" variant={data} align="left" paragraph>
        <h3>
          <u>Skills</u>
        </h3>

        <ul>
          <li> Language <br></br> <b>Java, JavaScript, Kotlin, Python</b></li> <br></br> 
          <li> FrontEnd <br></br> <b>React JS, HTML5, CSS3, JavaScript</b></li> <br></br> 
          <li> BackEnd <br></br> <b>Spring Boot, Dropwizard, Express JS, Flask, PostgreSQL, MongoDB</b> </li>
        </ul>
      </Typography>

      <Typography className="info" variant={data} align="left" paragraph>
        <h3>
          <u>Projects</u>{" "}
          <Tooltip TransitionComponent={Zoom} title="Navigate To Projects">
            <a href="#projects">
              <LinkIcon id="projectLink" />
            </a>
          </Tooltip>
        </h3>
        <Typography className="info" variant={data} align="left" paragraph>
          Below are few Projects done by me.These are Personal<span hidden>&
          Professional</span> projects.<br></br> <span style = {{"color" : "#4169e1"}}>Front-End Projects are in Blue</span> , <span style = {{"color" : "#2e8b57"}}>Back-End Projects are in
          Green</span> & <span style = {{"color" : "#ff7f50"}}>Full Stack Projects are in Orange</span>.
        </Typography>

        <Typography hidden className="info" variant={data} align="left" paragraph>
          <ul>
            <li>Personal Project - Source code will be avliable.</li>

            <li>Professional Project - Source code will not be avliable.</li>
          </ul>
        </Typography>
      </Typography>

      <Typography className="info" variant={data} align="left" paragraph>
        <h3>
          <u>Contact</u>{" "}
          <Tooltip
            TransitionComponent={Zoom}
            title="Navigate To Contact Details"
          >
            <a href="#footer">
              <LinkIcon id="projectLink" />
            </a>
          </Tooltip>
        </h3>
        Click on above link to Navigate to contact details.
      </Typography>

      <Typography
        className="info"
        variant={data}
        align="left"
        paragraph
        hidden={!props.show}
      >
        <h3>
          <u>Resume & Linkdin</u>
        </h3>
        Below are Buttons to Download Resume & To Navigate to Linkedin.
      </Typography>
    </React.Fragment>
  );
}

export default Body;
