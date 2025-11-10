import { workExperience } from "../constants/portfolio-data";
import "./WorkExperience.css";

// Technology category mapping
const techCategories: Record<string, string> = {
	// Cloud & Infrastructure
	"Microsoft Azure": "cloud",
	Azure: "cloud",
	AWS: "cloud",
	Docker: "cloud",
	IIS: "cloud",
	"Cloud Technologies": "cloud",
	// Programming Languages
	Python: "language",
	JavaScript: "language",
	"Modern JavaScript": "language",
	TypeScript: "language",
	"ColdFusion/Lucee": "language",
	ColdFusion: "language",
	Lucee: "language",
	"C#": "language",
	// Frameworks & Libraries
	React: "framework",
	Vue: "framework",
	"Vue 3": "framework",
	".NET": "framework",
	Vite: "framework",
	CSS: "framework",
	// Databases
	SQL: "database",
	"SQL Server": "database",
	MongoDB: "database",
	PostgreSQL: "database",
	Snowflake: "database",
	// Skills & Methodologies
	"Project Management": "skill",
	"Full-Stack Development": "skill",
	"Application Architecture": "skill",
};

const getTechCategory = (tech: string): string => {
	return techCategories[tech] || "other";
};

const WorkExperience = () => {
	return (
		<section id="experience" className="work-experience">
			<div className="container">
				<h2>Work Experience</h2>
				<div className="experience-timeline">
					{workExperience.map((job) => (
						<div key={job.id} className="experience-item">
							<div className="experience-header">
								<div>
									<h3>{job.title}</h3>
									<h4>{job.company}</h4>
								</div>
								<div className="experience-meta">
									<span className="employment-type">
										{job.employmentType}
									</span>
									<span className="date-range">
										{job.startDate}
										{job.endDate
											? ` - ${job.endDate}`
											: " - Present"}
									</span>
									<span className="location">
										{job.location}
									</span>
								</div>
							</div>
							{job.description && (
								<p className="experience-description">
									{job.description}
								</p>
							)}
							{job.technologies &&
								job.technologies.length > 0 && (
									<div className="experience-technologies">
										{job.technologies.map((tech, index) => (
											<span
												key={index}
												className={`tech-tag tech-${getTechCategory(
													tech
												)}`}
											>
												{tech}
											</span>
										))}
									</div>
								)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WorkExperience;
