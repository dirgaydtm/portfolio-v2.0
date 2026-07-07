export type Project = {
	slug: string;
	title: string;
	shortDescription: string;
	fullDescription: string;
	images: string[];
	technologies: string[];
	features: string[];
	logo?: string;
	liveUrl?: string;
	githubUrl?: string;
	category: string;
	year: string;
	license?: string;
};
