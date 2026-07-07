import { CheckCircle2 } from "lucide-react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/card";
import MagicCard from "@/shared/components/magic-card";
import { ScrollArea } from "@/shared/components/scroll-area";
import type { Project } from "../types/project";

interface ProjectFeaturesProps {
	project: Project;
	className?: string;
}

export default function ProjectFeatures({
	project,
	className,
}: ProjectFeaturesProps) {
	return (
		<Card className={`p-0 ${className}`}>
			<MagicCard>
				<CardHeader className="pt-6 pb-4">
					<CardTitle>Key Features</CardTitle>
				</CardHeader>
				<CardContent className="pb-6">
					<ScrollArea className="h-auto">
						<ul className="grid gap-2 md:grid-cols-2">
							{project.features.map((feature) => (
								<li
									key={feature}
									className="flex items-start gap-2 text-muted-foreground"
								>
									<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</ScrollArea>
				</CardContent>
			</MagicCard>
		</Card>
	);
}
