import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Projects from "./SmallerComponents/Projects";
import Footer from "./SmallerComponents/Footer";
import MainContent from "./SmallerComponents/MainContent";

export default function Portolio() {
  return (
    <React.Fragment>
      <CssBaseline />

      <MainContent />

      <Projects />

      <Footer />
    </React.Fragment>
  );
}
