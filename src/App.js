import "./App.css";
import React from "react";
import MainContent from "./components/SmallerComponents/MainContent";
import Projects from "./components/SmallerComponents/Projects";
import Footer from "./components/SmallerComponents/Footer";

function App() {
  return (
    <React.Fragment>

      <MainContent show={false} />
      <Projects />
      <Footer />
    
    </React.Fragment>
  );
}

export default App;
