import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

function Header() {
  const [headingName, setHeadingName] = useState("");

  useEffect(() => {
    const res = window.outerWidth;

    if (res > 768) {
      setHeadingName("h2");
    } else if (res > 480) {
      setHeadingName("h1");
    } else {
      setHeadingName("h1");
    }
  }, []);

  return (
    <React.Fragment>
      <Typography
        component="h1"
        variant={headingName}
        align="left"
        className="info"
        gutterBottom
      >
        Hello There ,
      </Typography>
    </React.Fragment>
  );
}

export default Header;
