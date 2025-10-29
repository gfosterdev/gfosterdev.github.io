import type { PersonalInfo } from "../types/portfolio";
import "./About.css";

interface AboutProps {
	personalInfo: PersonalInfo;
}

const About = ({ personalInfo }: AboutProps) => {
	return (
		<section id="about" className="about">
			<div className="about-container">
				<div className="about-content">
					<h3 className="about-greeting">
						I'm {personalInfo.firstName}.
					</h3>
					<h1 className="about-headline">
						I'm a {personalInfo.currentRole} working remote in{" "}
						{personalInfo.location}.
					</h1>
					{personalInfo.bio.map((paragraph, index) => (
						<p key={index} className="about-paragraph">
							{paragraph}
						</p>
					))}

					{personalInfo.skills.length > 0 && (
						<>
							<p className="about-paragraph skills-intro">
								Skills include:
							</p>
							<ul className="skills-list">
								{personalInfo.skills.map((skill, index) => (
									<li key={index}>{skill.name}</li>
								))}
							</ul>
						</>
					)}

					<p className="about-paragraph">
						Currently, I'm still with the team I've worked with for
						the last {personalInfo.experience} as a{" "}
						{personalInfo.currentRole} helping develop and manage
						existing and new products.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
