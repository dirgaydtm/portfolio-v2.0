import { Badge } from "@/shared/components/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/card";
import MagicCard from "@/shared/components/magic-card";
import type { Project } from "../types/project";

interface ProjectTechnologiesProps {
	project: Project;
	className?: string;
}

export default function ProjectTechnologies({
	project,
	className,
}: ProjectTechnologiesProps) {
	return (
		<Card className={`p-0 ${className}`}>
			<MagicCard>
				<CardHeader className="pt-6 pb-4">
					<CardTitle>Technologies</CardTitle>
					<CardDescription>Built with</CardDescription>
				</CardHeader>
				<CardContent className="pb-6">
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<Badge key={tech} variant="secondary">
								{tech}
							</Badge>
						))}
					</div>
				</CardContent>
			</MagicCard>
		</Card>
	);
}
