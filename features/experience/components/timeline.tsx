import type { Experience } from "../types/experience";
import TimelineItem from "./timeline-item";

interface TimelineProps {
	items: Experience[];
	className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
	return (
		<div className={className}>
			<div className="relative">
				<div className="absolute top-0 w-0.5 bg-border left-5 md:left-1/2 md:-translate-x-1/2 h-[110%]" />
				{items.map((item, i) => (
					<TimelineItem
						key={`${item.company}-${item.title}`}
						item={item}
						isRight={i % 2 === 0}
						className="relative flex items-start pb-12 last:pb-0"
					/>
				))}
			</div>
		</div>
	);
}
