import type {
	PersonalInfo,
	SocialLink,
	Project,
	WorkExperience,
} from "../types/portfolio";

export const personalInfo: PersonalInfo = {
	firstName: "George",
	lastName: "Foster",
	title: "Full-Stack Web Developer",
	location: "Norfolk, England",
	email: "gfoster.dev@gmail.com",
	bio: [
		"Full-Stack web developer with 11 years of experience working with ColdFusion/Lucee to develop customer tailored applications for both public and internal use.",
		"Currently working as a Software Developer at Lead Forensics, where I contribute to building scalable web solutions for enterprise clients.",
		"Whilst most proficient with ColdFusion/Lucee, I have experience building applications in many various languages such as JavaScript, C#, and Python.",
		"I have had the opportunity to work on projects of various sizes - ranging from simple data-in/data-out applications to fully autonomous interactable communication and administration systems.",
	],
	skills: [
		{ name: "ColdFusion/Lucee" },
		{ name: "JavaScript" },
		{ name: "C#" },
		{ name: "Python" },
		{ name: "Full-Stack Development" },
		{ name: "Application Architecture" },
		{ name: "Docker" },
		{ name: "Microsoft Azure" },
		{ name: "Project Management" },
	],
	experience: "11 years",
	currentRole: "Software Developer",
};

export const socialLinks: SocialLink[] = [
	{
		platform: "LinkedIn",
		url: "https://www.linkedin.com/in/george-foster-777360144",
		icon: "fa-brands fa-linkedin",
	},
];

export const projects: Project[] = [
	{
		id: "portfolio-website",
		title: "Portfolio Website",
		description:
			"A modern, responsive personal portfolio website built with React and TypeScript. Features a clean design with sections for about, projects, and contact information. Demonstrates proficiency in modern web development practices and component-based architecture.",
		technologies: ["React", "TypeScript", "Vite", "CSS"],
		link: "https://gfosterdev.github.io/",
		github: "https://github.com/gfosterdev/gfosterdev.github.io",
	},
	{
		id: "smithandwilliamson-ui",
		title: "Smith & Williamson UI",
		description:
			"A modern, responsive portfolio website showcasing construction and home improvement services. Features an interactive project gallery, contact form, and optimized responsive design for all device sizes.",
		technologies: ["Vue 3", "TypeScript", "Vite", "CSS"],
		link: "https://gfosterdev.github.io/smithandwilliamson-ui/",
		github: "https://github.com/gfosterdev/smithandwilliamson-ui",
		image: "https://gfosterdev.github.io/smithandwilliamson-ui/screenshot.png",
	},
];

export const workExperience: WorkExperience[] = [
	{
		id: "lead-forensics",
		company: "Lead Forensics",
		title: "Software Developer",
		employmentType: "Full-time",
		startDate: "Feb 2024",
		location: "United Kingdom · Remote",
		technologies: [
			"JavaScript",
			"TypeScript",
			"Vue",
			"C#",
			".NET",
			"AWS",
			"SQL Server",
			"Snowflake",
		],
	},
	{
		id: "premapp-tdm",
		company: "Premapp",
		title: "Technical Development Manager",
		employmentType: "Full-time (Retained)",
		startDate: "Apr 2023",
		location: "Norfolk, England, United Kingdom · Remote",
		description: "Microsoft Azure and Development Project Management",
		technologies: [
			"Lucee",
			"ColdFusion",
			"Cloud Technologies",
			"SQL Server",
			"IIS",
			"Project Management",
		],
	},
	{
		id: "efficienc-tdm",
		company: "Efficienc Health Technology UK Limited",
		title: "Technical Development Manager",
		employmentType: "Full-time",
		startDate: "May 2021",
		endDate: "Sep 2023",
		location: "Remote",
		technologies: [
			"Lucee",
			"ColdFusion",
			"Cloud Technologies",
			"SQL Server",
			"IIS",
			"Project Management",
		],
	},
	{
		id: "efficienc-lead-ops",
		company: "EfficienC Software Group Ltd",
		title: "Software Developer and Lead Operations Engineer",
		employmentType: "Full-time",
		startDate: "Jun 2017",
		endDate: "Sep 2023",
		location: "County Galway, Ireland",
		technologies: [
			"ColdFusion/Lucee",
			"Docker",
			"IIS",
			"Azure",
			"SQL Server",
		],
	},
	{
		id: "efficienc-developer",
		company: "EfficienC Software Group Ltd",
		title: "Software Developer",
		employmentType: "Full-time",
		startDate: "Dec 2014",
		endDate: "Jun 2017",
		technologies: ["ColdFusion/Lucee", "JavaScript", "SQL"],
	},
];
