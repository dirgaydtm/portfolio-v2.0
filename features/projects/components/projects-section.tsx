import Fade from "@/shared/animations/fade";
import Reveal from "@/shared/animations/reveal";
import Shiny from "@/shared/animations/shiny";
import { Badge } from "@/shared/components/badge";
import { Separator } from "@/shared/components/separator";
import { projects } from "../data/projects";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
	return (
		<section
			id="projects"
			className="relative flex items-center justify-center py-20 px-4 overflow-hidden"
		>
			<div className="flex flex-col relative gap-10 max-w-7xl">
				<div className="mx-auto flex flex-col items-center gap-4 max-w-6xl text-center">
					<Badge variant="outline">Portfolio</Badge>
					<Reveal once>
						<Shiny className="text-4xl font-bold tracking-tight text-foreground">
							Featured Projects
						</Shiny>
					</Reveal>
					<Reveal
						mode="auto"
						once
						direction="down"
						stagger={0.05}
						className="justify-center max-w-2xl text-base md:text-lg text-muted-foreground"
					>
						A selection of projects I&apos;ve worked on, from web to mobile
						apps.
					</Reveal>
				</div>
				<Fade
					once
					direction="down"
					delay={0.4}
					className="flex flex-wrap gap-4 md:gap-6 justify-center"
				>
					{projects.map((project) => (
						<ProjectCard
							key={project.slug}
							project={project}
							className="w-xs hover:-translate-y-2 cursor-pointer transition-all shadow-none hover:shadow-primary/5  hover:shadow-xl"
						/>
					))}
				</Fade>
			</div>
			<Separator className="absolute bottom-0 max-w-400" />
		</section>
	);
}
