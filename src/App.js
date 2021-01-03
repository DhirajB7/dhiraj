import "./App.css";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import MainContent from "./components/SmallerComponents/MainContent";
import Projects from "./components/SmallerComponents/Projects";
import Footer from "./components/SmallerComponents/Footer";

function App() {

	return (

		<React.Fragment>

			<CssBaseline />

			<MainContent />

			<Projects />

			<Footer />

		</React.Fragment>
	)
}

export default App;
