import { useState, useEffect } from "react";
import "./Header.css";

interface HeaderProps {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
	const [activeSection, setActiveSection] = useState("home");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "about", "projects", "contact"];
			const scrollPosition = window.scrollY + 100;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;

			// Check if we're at the bottom of the page
			if (window.scrollY + windowHeight >= documentHeight - 50) {
				setActiveSection("contact");
				return;
			}

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		handleScroll(); // Call on mount
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (sectionId: string) => {
		setMenuOpen(false);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="header">
			<a
				href="#home"
				className="logo"
				onClick={(e) => {
					e.preventDefault();
					handleNavClick("home");
				}}
			>
				<span>gfoster.dev</span>
			</a>

			<div className="header-controls">
				<button
					className="theme-toggle"
					onClick={toggleTheme}
					aria-label="Toggle theme"
				>
					<i
						className={`fas fa-${
							theme === "light" ? "moon" : "sun"
						}`}
					></i>
				</button>

				<button
					className={`menu-toggle ${menuOpen ? "active" : ""}`}
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					<i className="fas fa-bars"></i>
				</button>
			</div>

			<nav className={`navbar ${menuOpen ? "active" : ""}`}>
				<ul>
					<li>
						<a
							href="#home"
							className={activeSection === "home" ? "active" : ""}
							onClick={(e) => {
								e.preventDefault();
								handleNavClick("home");
							}}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							className={
								activeSection === "about" ? "active" : ""
							}
							onClick={(e) => {
								e.preventDefault();
								handleNavClick("about");
							}}
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className={
								activeSection === "projects" ? "active" : ""
							}
							onClick={(e) => {
								e.preventDefault();
								handleNavClick("projects");
							}}
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className={
								activeSection === "contact" ? "active" : ""
							}
							onClick={(e) => {
								e.preventDefault();
								handleNavClick("contact");
							}}
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
