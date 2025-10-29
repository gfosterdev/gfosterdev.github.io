import type { PersonalInfo, SocialLink } from "../types/portfolio";

export const personalInfo: PersonalInfo = {
	firstName: "George",
	lastName: "Foster",
	title: "Full Stack Developer",
	location: "Norfolk, England",
	email: "gfoster.dev@gmail.com",
	bio: [
		"For the past 9 years, I have been working as a Software Developer for a small team covering all aspects of product and project design.",
		"What started as just a software development job turned into me learning various skills from all aspects of product development.",
		"Currently, I'm still with the team I've worked with for the last 9 years as a Technical Development Manager helping develop and manage existing and new products.",
	],
	skills: [
		{ name: "Project Management" },
		{ name: "DevOps" },
		{ name: "Front/Back End Development" },
		{ name: "Database Administration" },
	],
	experience: "9 years",
	currentRole: "Technical Development Manager",
};

export const socialLinks: SocialLink[] = [
	{
		platform: "LinkedIn",
		url: "https://www.linkedin.com/in/george-foster-777360144",
		icon: "fa-brands fa-linkedin",
	},
];
