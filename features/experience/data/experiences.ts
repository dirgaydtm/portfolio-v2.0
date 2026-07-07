import { Code, Crown, GraduationCap } from "lucide-react";
import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
	{
		title: "Mobile Engineer",
		company: "Raion Community",
		period: "Feb 2026 – Present",
		description:
			"Developed cross-platform mobile applications using Flutter and Firebase, writing clean, modular, and maintainable code to implement scalable and reusable features efficiently.",
		skills: ["Flutter", "Dart", "Firebase", "Mobile App Architecture"],
		icon: Code,
	},
	{
		title: "Vice Head of IT Development Department",
		company: "KBMDSI Brawijaya University",
		period: "Jan 2026 – Present",
		description:
			"Coordinated and supervised the internal IT development department, acted as a bridge between designers, developers, and stakeholders, and developed and maintained reliable web systems using Next.js, Docker, and Linux.",
		skills: [
			"Next.js",
			"Linux",
			"Docker",
			"Technical Leadership",
			"Code Review",
		],
		icon: Crown,
	},
	{
		title: "Bakti BCA Awardee 2026",
		company: "PT Bank Central Asia Tbk.",
		period: "Dec 2025 – Present",
		description:
			"Selected as a Bakti BCA Awardee, 1 of 700 from over 10,000 nationwide applicants. Participated in leadership development, capacity building, and community empowerment programs.",
		skills: ["Leadership", "Communication", "Problem Solving"],
		icon: GraduationCap,
	},
	{
		title: "Frontend Developer",
		company: "KBMDSI Brawijaya University",
		period: "Mar 2025 – Jan 2026",
		description:
			"Developed and maintained responsive KBMDSI web applications using React.js, collaborated with designers and backend teams, and refactored code to ensure performance, and maintainability.",
		skills: ["React.js", "TypeScript", "Tailwind", "Vercel"],
		icon: Code,
	},
	{
		title: "Teaching Assistant: Basic Programming",
		company: "Faculty of Computer Science, Brawijaya University",
		period: "Sep – Dec 2025",
		description:
			"Taught core Java concepts (data structures, functions, OOP) to 35 students, facilitated labs, reviewed assignments, and provided feedback on code quality and best practices.",
		skills: [
			"Java",
			"Object-Oriented Programming",
			"Code Review",
			"Technical Mentoring",
		],
		icon: GraduationCap,
	},
	{
		title: "Mobile Engineer Intern",
		company: "Raion Community",
		period: "Feb - Mar 2025",
		description:
			"Collaborated with the development team to build modern Android app using Jetpack Compose. Focused on implementing UI components and integrating Firebase services.",
		skills: ["Kotlin", "Jetpack Compose", "Firebase"],
		icon: Code,
	},
];
