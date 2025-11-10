import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { personalInfo } from "./constants/portfolio-data";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			<Hero personalInfo={personalInfo} />
			<About personalInfo={personalInfo} />
			<WorkExperience />
			<Projects />
			<Contact personalInfo={personalInfo} />
		</div>
	);
}

export default App;
