import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type TechStackItem = {
	name: string;
	category: string;
	icon: IconType;
};

export type TechStackGroup = {
	icon: LucideIcon;
	items: TechStackItem[];
};

export type TechStack = {
	[groupName: string]: TechStackGroup;
};
