// Framework
import React from "react";
import { FaLinkedin, FaGithub, FaGit } from "react-icons/fa6";

// Internal
import "./NavigationBar.scss";
import { images } from "../../constants";

const NavigationBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__headshot">
				<img src={images.headshot} alt="headshot" />
			</div>
			<h1 className="navbar__title">gfoster.dev</h1>
			<div className="navbar__socials">
				<a href="#">
					<FaLinkedin />
				</a>
				<a href="#">
					<FaGithub />
				</a>
			</div>
			<ul className="navbar__links">
				{["home", "about", "skills", "projects"].map((item) => (
					<li key={`link-${item}`}>
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
				<li>
					<a href="#contact">contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
