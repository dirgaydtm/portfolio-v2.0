import Fade from "@/shared/animations/fade";
import Reveal from "@/shared/animations/reveal";
import Shiny from "@/shared/animations/shiny";
import { Badge } from "@/shared/components/badge";
import { Separator } from "@/shared/components/separator";
import { techStack } from "../data/tech-stack";
import TechStackBadges from "./tech-stack-badges";
import TechStackCard from "./tech-stack-card";
import TechStacksCarousel from "./tech-stack-carousel";

export default function TechStackSection() {
	const techStackItems = Object.values(techStack).flatMap(
		(group) => group.items,
	);

	return (
		<section
			id="skills"
			className="relative flex items-center justify-center py-20 px-6 overflow-hidden"
		>
			<div className="flex flex-col relative gap-10 max-w-7xl z-1">
				<div className="mx-auto flex flex-col items-center gap-4 max-w-6xl text-center">
					<Badge variant="outline">Tech Stack</Badge>
					<Reveal once>
						<Shiny className="text-4xl font-bold tracking-tight text-foreground">
							Skills & Technologies
						</Shiny>
					</Reveal>
					<Reveal
						mode="auto"
						once
						direction="down"
						stagger={0.05}
						className="justify-center max-w-2xl text-base md:text-lg text-muted-foreground"
					>
						Here are the technologies I work with on a daily basis to build
						modern, scalable applications.
					</Reveal>
				</div>
				<div className="flex flex-col">
					<TechStacksCarousel className="relative w-sm sm:w-full flex items-center overflow-hidden" />

					<Separator className="mx-auto mb-10 py-0 w-24" />
					<Fade
						once
						direction="down"
						delay={1}
						className="flex items-center justify-center"
					>
						<div className="hidden md:flex flex-wrap gap-4">
							{Object.entries(techStack).map(([groupName, group]) => (
								<TechStackCard
									key={groupName}
									groupName={groupName}
									group={group}
								/>
							))}
						</div>
						<TechStackBadges
							techStackItems={techStackItems}
							className="flex flex-wrap max-w-xl items-center justify-center md:hidden gap-2"
						/>
					</Fade>
				</div>
			</div>
		</section>
	);
}
