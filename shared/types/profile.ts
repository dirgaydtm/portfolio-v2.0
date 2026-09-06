import type { IconType } from 'react-icons/lib';

export type SocialLink = {
	name: string;
	url: string;
	icon: IconType;
	platform: string;
};

export type Profile = {
	name: string;
	title: string;
	bio: string;
	description: string;
	avatar: string;
	logo: string;
	location: string;
	email: string;
	resumeUrl: string;
	availableForWork: boolean;
	socials: SocialLink[];
};
