export interface Skill {
	name: string;
}

export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	link?: string;
}

export interface SocialLink {
	platform: string;
	url: string;
	icon: string;
}

export interface PersonalInfo {
	firstName: string;
	lastName: string;
	title: string;
	location: string;
	email: string;
	bio: string[];
	skills: Skill[];
	experience: string;
	currentRole: string;
}
