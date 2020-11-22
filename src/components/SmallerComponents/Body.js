import React from "react";

function Body() {
  return (
    <React.Fragment>
      <p className="skillList">
        Hello, I am Dhiraj working as Full Stack Developer. Like to Code & Learn
        new Technologies.
      </p>
      <h4>
        <u className="skillList">Skill Set</u>
      </h4>
      <ul className="skillList">
        <li>Language - Java, JavaScript, Python</li>
        <li>FrontEnd - React JS, HTML5, CSS3</li>
        <li>
          BackEnd - Spring Boot, Dropwizard, Express JS, PostgreSQL, MongoDB
        </li>
      </ul>
      <h4>
        <u>Projects</u>
      </h4>
      <p className="skillList">
        Below are few Projects done by me. These Projects are Personal &
        Professional. Front-End Projects are in Blue, Back-End Projects are in
        Green & Full Stack Projects are in Orange.
      </p>
      <p className="skillList">
        <ul>
          <li>Personal Project - Image & Source Code Avliable.</li>
          <li>
            Professional Project -
            <ul>
              <li>Source code not avliable.</li>
              <li>Image may or may not be avliable.</li>
            </ul>{" "}
          </li>
        </ul>
      </p>
      <h4>
        <u>Resume & Linkdin</u>
      </h4>
      <p className="skillList">
        Below are Buttons to Download Resume & To Navigate to Linkedin.
      </p>
    </React.Fragment>
  );
}

export default Body;
