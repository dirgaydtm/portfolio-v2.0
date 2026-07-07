import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import Reveal from "@/shared/animations/reveal";
import Shiny from "@/shared/animations/shiny";
import { Button } from "@/shared/components/button";
import type { Project } from "../types/project";

interface ProjectHeaderProps {
	project: Project;
	className?: string;
}

export default function ProjectHeader({
	project,
	className,
}: ProjectHeaderProps) {
	return (
		<section className={className}>
			<Button variant="ghost" className="mb-8 transition-all group" asChild>
				<Link href="../">
					<ArrowLeft className="group-hover:mr-1 not-group-hover:ml-1 transition-all" />
					Back to Home
				</Link>
			</Button>

			<div>
				<Reveal once>
					<Shiny className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
						{project.title}
					</Shiny>
				</Reveal>
				<Reveal
					once
					stagger={0.1}
					mode="auto"
					className="text-muted-foreground my-4"
				>
					{project.shortDescription}
				</Reveal>
				<div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
					<Reveal once className="flex items-center gap-2">
						<Calendar className="h-4 w-4" /> {project.year}
					</Reveal>
					<Reveal once className="flex items-center gap-2">
						<Tag className="h-4 w-4" /> {project.category}
					</Reveal>
				</div>
			</div>
		</section>
	);
}
