import { Badge } from "@/shared/components/badge";
import type { TechStackItem } from "../types/tech-stack";

interface TechStackBadgesProps {
	techStackItems: TechStackItem[];
	className?: string;
}

export default function TechStackBadges({
	techStackItems,
	className,
}: TechStackBadgesProps) {
	return (
		<div className={className}>
			{techStackItems.map((tech) => (
				<Badge key={tech.name} variant="secondary" className="text-xs">
					{tech.name}
				</Badge>
			))}
		</div>
	);
}
