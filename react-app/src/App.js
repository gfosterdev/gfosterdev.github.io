import React from "react";

import "./App.scss";

import { CTA, About, Skills, Projects, Footer } from "./containers";
import { NavigationBar } from "./components";

const App = () => {
	return (
		<div className="app">
			<NavigationBar />
			<div className="sections">
				<CTA />
				<About />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</div>
	);
};

export default App;
