import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
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
			<Projects />
			<Contact personalInfo={personalInfo} />
		</div>
	);
}

export default App;
