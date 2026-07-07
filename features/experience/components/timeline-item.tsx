import { Building2, Calendar } from "lucide-react";
import Fade from "@/shared/animations/fade";
import Reveal from "@/shared/animations/reveal";
import Shiny from "@/shared/animations/shiny";
import { Badge } from "@/shared/components/badge";
import type { Experience } from "../types/experience";

interface TimelineItemProps {
	item: Experience;
	isRight: boolean;
	className?: string;
}

export default function TimelineItem({
	item,
	isRight,
	className,
}: TimelineItemProps) {
	const Icon = item.icon;
	const justifyClass = isRight ? "md:justify-start" : "md:justify-end";
	const alignClass = isRight ? "md:text-left md:pl-4" : "md:text-right md:pr-4";

	return (
		<div
			className={`relative flex items-start pb-12 last:pb-0 ${isRight ? "md:justify-end" : "md:justify-start"} ${className}`}
		>
			<div className="absolute left-5 md:left-1/2 -translate-x-1/2 size-10 flex items-center justify-center rounded-full border-2 border-border bg-card">
				<Icon className="size-5 text-muted-foreground" />
			</div>
			<div
				className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] text-left ${alignClass}`}
			>
				<Reveal
					once
					className={`flex items-center gap-2.5 h-9 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
				>
					<Building2 className="size-5 shrink-0 h-full hidden md:flex text-muted-foreground" />
					<span className="text-sm md:text-base font-medium text-foreground">
						{item.company}
					</span>
				</Reveal>
				<Fade direction="down" once delay={0.5} className="space-y-3">
					<div className="space-y-1">
						<Shiny className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
							{item.title}
						</Shiny>
						<div
							className={`flex items-center gap-2 mt-1 text-sm md:text-base text-muted-foreground ${justifyClass}`}
						>
							<Calendar className="size-4" />
							<span>{item.period}</span>
						</div>
					</div>
					<p className="text-sm md:text-base text-muted-foreground leading-relaxed">
						{item.description}
					</p>
					<div className={`flex flex-wrap gap-2 ${justifyClass}`}>
						{item.skills.map((tech) => (
							<Badge key={tech} variant="secondary" className="rounded-full">
								{tech}
							</Badge>
						))}
					</div>
				</Fade>
			</div>
		</div>
	);
}
