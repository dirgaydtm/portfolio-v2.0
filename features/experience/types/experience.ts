import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type Experience = {
	title: string;
	company: string;
	period: string;
	description: string;
	skills: string[];
	icon: LucideIcon | IconType;
};
