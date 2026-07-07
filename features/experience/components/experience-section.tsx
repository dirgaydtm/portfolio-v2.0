import Reveal from "@/shared/animations/reveal";
import Shiny from "@/shared/animations/shiny";
import { Badge } from "@/shared/components/badge";
import { experiences } from "../data/experiences";
import Hexagon from "./hexagon";
import Timeline from "./timeline";

export default function ExperienceSection() {
	return (
		<section
			id="experience"
			className="relative bg-background py-20 px-4 overflow-hidden"
		>
			<Hexagon />

			<div className="mx-auto flex flex-col items-center gap-4 max-w-6xl md:py-10 pointer-events-none">
				<Badge variant="outline" className="z-1">
					Career
				</Badge>
				<Reveal once>
					<Shiny className="text-4xl font-bold tracking-tight text-foreground">
						Experience
					</Shiny>
				</Reveal>
				<Reveal
					mode="auto"
					once
					direction="down"
					stagger={0.05}
					className="max-w-lg text-base md:text-lg text-muted-foreground justify-center"
				>
					My professional journey in the tech, building products and growing as
					a developer.
				</Reveal>
				<Timeline className="pt-10" items={experiences} />
			</div>

			<div className="pointer-events-none absolute inset-x-0 top-0 h-64 z-10 bg-linear-to-b from-background to-transparent" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 z-10 bg-linear-to-t from-background to-transparent" />
		</section>
	);
}
