import Fade from "@/shared/animations/fade";
import type { Project } from "../types/project";
import ProjectAbout from "./project-about";
import ProjectCarousel from "./project-carousel";
import ProjectFeatures from "./project-features";
import ProjectHeader from "./project-header";
import ProjectTechnologies from "./project-technologies";

interface ProjectDetailProps {
	project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
	return (
		<main className="px-4 py-12 sm:px-6">
			<div className="mx-auto max-w-5xl">
				<ProjectHeader project={project} className="mb-8" />

				<ProjectCarousel project={project} className="mb-6" />

				<section
					className="grid gap-6 lg:grid-cols-3"
					aria-label="Project details"
				>
					<Fade
						once
						direction="down"
						className="order-1 md:order-0 lg:col-span-3"
					>
						<ProjectAbout project={project} className="border-border" />
					</Fade>
					<Fade
						once
						direction="down"
						delay={0.3}
						className="order-3 md:order-0 lg:col-span-2 space-y-6"
					>
						<ProjectFeatures project={project} className="border-border" />
					</Fade>
					<Fade
						once
						direction="down"
						delay={0.3}
						className="order-2 md:order-0 space-y-6"
					>
						<ProjectTechnologies project={project} className="border-border" />
					</Fade>
				</section>
			</div>
		</main>
	);
}
