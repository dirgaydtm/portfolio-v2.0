import { Badge } from "@/shared/components/badge";

interface AvailableBadgeProps {
	availableForWork: boolean;
	className?: string;
}

export default function AvailableBadge({
	availableForWork,
	className,
}: AvailableBadgeProps) {
	if (availableForWork) {
		return (
			<Badge
				variant="secondary"
				className={`gap-2 text-xs sm:text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 ${className || ""}`}
			>
				<span className="relative flex h-2 w-2">
					<span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
					<span className="relative h-2 w-2 rounded-full bg-emerald-500" />
				</span>
				Available for work
			</Badge>
		);
	}

	return (
		<Badge variant="outline" className={className}>
			Contact
		</Badge>
	);
}
