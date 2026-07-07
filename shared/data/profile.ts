import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import type { Profile } from "../types/profile";

export const profile: Profile = {
	name: "Dirga Yuditama",
	title: "Developer",
	bio: "I love creating elegant solutions to complex problems and constantly learning new technologies. I use Arch btw.",
	description:
		"I enjoy building modern frontend interfaces, caring about details, smooth interactions, and user experience. Always curious about new tools and better ways to build things.",
	avatar: "/Avatar.jpeg",
	logo: "/LogoDirgaaBlack.svg",
	location: "Malang, Indonesia",
	email: "dirgayuditama6@gmail.com",
	resumeUrl: "/resume.pdf",
	availableForWork: true,
	socials: [
		{ name: "dirgaydtm", url: "https://github.com/dirgaydtm", icon: FaGithub },
		{
			name: "dirgaydtm",
			url: "https://linkedin.com/in/dirgaydtm",
			icon: FaLinkedin,
		},
		{
			name: "dirgaa.yd",
			url: "https://instagram.com/dirgaa.yd",
			icon: FaInstagram,
		},
	],
};
