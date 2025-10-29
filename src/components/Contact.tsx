import type { PersonalInfo } from "../types/portfolio";
import "./Contact.css";

interface ContactProps {
	personalInfo: PersonalInfo;
}

const Contact = ({ personalInfo }: ContactProps) => {
	return (
		<section id="contact" className="contact">
			<div className="contact-container">
				<div className="contact-content">
					<div className="contact-left">
						<h3 className="contact-title">Contact Me</h3>
						<div className="contact-info">
							<span className="contact-label">Email:</span>{" "}
							<a
								href={`mailto:${personalInfo.email}`}
								className="contact-link"
							>
								{personalInfo.email}
							</a>
						</div>
					</div>
					<div className="contact-right">
						<a
							href="https://www.linkedin.com/in/george-foster-777360144"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-social-icon"
							aria-label="LinkedIn Profile"
						>
							<i className="fa-brands fa-linkedin"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
