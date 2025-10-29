import type { PersonalInfo } from "../types/portfolio";
import georgePortrait from "../assets/george-colour.jpg";
import "./Hero.css";

interface HeroProps {
	personalInfo: PersonalInfo;
}

const Hero = ({ personalInfo }: HeroProps) => {
	return (
		<section id="home" className="hero">
			<div className="hero-content">
				<div className="hero-portrait">
					<img
						src={georgePortrait}
						alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
						className="portrait-image"
					/>
				</div>
				<h3 className="hero-firstname">{personalInfo.firstName}</h3>
				<h3 className="hero-lastname">{personalInfo.lastName}</h3>
				<h1 className="hero-title">
					A {personalInfo.title} based in {personalInfo.location}.
				</h1>
				<a
					href="https://www.linkedin.com/in/george-foster-777360144"
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon"
					aria-label="LinkedIn Profile"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
			</div>
		</section>
	);
};

export default Hero;
