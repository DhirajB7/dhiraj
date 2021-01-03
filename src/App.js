import "./App.css";
import React, { useState } from "react";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import MainContent from "./components/SmallerComponents/MainContent";
import Projects from "./components/SmallerComponents/Projects";
import Footer from "./components/SmallerComponents/Footer";

function App() {

	const [change,setChange] = useState(false);

	window.onresize = () => {

		setChange(true)

		setTimeout(() => {
			setChange(false)
		}, 1500);
	}

	return (

		change ? <CircularProgress id = "loader" size = "3.8rem" thickness = "5"/> :

		<React.Fragment>

			<CssBaseline />

			<MainContent />

			<Projects />

			<Footer />

		</React.Fragment>
	)
}

export default App;
