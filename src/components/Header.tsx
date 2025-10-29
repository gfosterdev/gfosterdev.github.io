import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "about", "projects", "contact"];
			const scrollPosition = window.scrollY + 100;

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

			<button
				className={`menu-toggle ${menuOpen ? "active" : ""}`}
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu"
			>
				<i className="fas fa-bars"></i>
			</button>

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
