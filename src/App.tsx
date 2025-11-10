import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { personalInfo } from "./constants/portfolio-data";
import "./App.css";

function App() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		// Check for saved theme preference or default to system preference
		const savedTheme = localStorage.getItem("theme") as
			| "light"
			| "dark"
			| null;
		if (savedTheme) {
			setTheme(savedTheme);
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		}
	}, []);

	useEffect(() => {
		// Apply theme to document
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div className="app">
			<Header theme={theme} toggleTheme={toggleTheme} />
			<Hero personalInfo={personalInfo} />
			<About personalInfo={personalInfo} />
			<WorkExperience />
			<Projects />
			<Contact personalInfo={personalInfo} />
		</div>
	);
}

export default App;
