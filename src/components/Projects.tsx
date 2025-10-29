import { projects } from "../constants/portfolio-data";
import "./Projects.css";

const Projects = () => {
	return (
		<section id="projects" className="projects">
			<div className="projects-container">
				<h3 className="projects-title">Some Projects</h3>
				<div className="projects-list">
					{projects.length === 0 ? (
						<p className="projects-placeholder">
							Projects coming soon...
						</p>
					) : (
						projects.map((project) => (
							<div key={project.id} className="project-card">
								<div className="project-content">
									<h4 className="project-title">
										{project.title}
									</h4>
									<p className="project-description">
										{project.description}
									</p>
									<div className="project-technologies">
										{project.technologies.map(
											(tech, index) => (
												<span
													key={index}
													className="project-tech-tag"
												>
													{tech}
												</span>
											)
										)}
									</div>
									<div className="project-links">
										{project.link && (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link"
											>
												<i className="fas fa-external-link-alt"></i>{" "}
												View Demo
											</a>
										)}
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link"
											>
												<i className="fab fa-github"></i>{" "}
												View Code
											</a>
										)}
									</div>
								</div>
								{project.image && (
									<div className="project-image">
										<img
											src={project.image}
											alt={`${project.title} screenshot`}
										/>
									</div>
								)}
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
};

export default Projects;
