import { formatDate } from "@/shared/lib/date";
import { cn } from "@/shared/lib/utils";
import type { ContributionsData } from "../types/contribution";

function getLevelClass(count: number): string {
	if (count === 0) {
		return "bg-black/5 border border-black/5 dark:bg-zinc-900/60 dark:border-white/5";
	}
	if (count <= 2) {
		return "bg-emerald-200 border border-emerald-300 dark:bg-white/20 dark:border-white/15";
	}
	if (count <= 5) {
		return "bg-emerald-400 border border-emerald-500/40 dark:bg-white/45 dark:border-white/30";
	}
	if (count <= 9) {
		return "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)] dark:bg-white/80 dark:shadow-[0_0_6px_rgba(255,255,255,0.4)]";
	}
	return "bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.5)] dark:bg-white dark:shadow-[0_0_12px_rgba(255,255,255,0.9)]";
}

function getTooltip(dateStr: string, count: number): string {
	const countLabel =
		count === 0
			? "no contributions"
			: `${count} contribution${count === 1 ? "" : "s"}`;
	const prefix = `${formatDate(dateStr)} | ${countLabel}`;
	if (count === 0) return `${prefix} (touched grass)`;
	if (count <= 2) return `${prefix} (padding my graph)`;
	if (count <= 5) return `${prefix} (coffee to code)`;
	if (count <= 9) return `${prefix} (locked in)`;
	return `${prefix} (sleep is optional)`;
}

export default function Contribution({
	data,
	className,
}: {
	data: ContributionsData;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"pointer-events-none absolute inset-0 z-30 select-none",
				className,
			)}
		>
			<div className="relative h-full w-full">
				<div
					style={
						{
							"--cell-size": "calc((180vw - (34 * 4px)) / 35)",
							"--cell-size-md": "calc((160vw - (34 * 5px)) / 35)",
							"--cell-size-lg": "calc((140vh - (34 * 6px)) / 35)",
						} as React.CSSProperties
					}
					className="pointer-events-auto absolute -bottom-20 sm:-bottom-24 md:-bottom-36 left-1/2 -translate-x-1/2 rotate-[-2.5deg] grid grid-rows-7 grid-flow-col gap-1 w-max transition-all duration-300 lg:bottom-auto lg:top-1/2 lg:left-10 lg:-translate-y-1/2 lg:-rotate-5 lg:grid-rows-none lg:grid-flow-row lg:grid-cols-7 lg:gap-1.5 lg:w-auto"
				>
					{data.days.map((day, index) => (
						<div
							key={day.date}
							title={getTooltip(day.date, day.count)}
							style={{
								animationDelay: `calc(var(--splash-delay, 6.8s) + ${(index * 0.01).toFixed(3)}s)`,
							}}
							className={`animate-pop-in size-(--cell-size) md:size-(--cell-size-md) lg:size-(--cell-size-lg) rounded-xs md:rounded-sm lg:rounded-md transition-all duration-150 hover:scale-150 hover:z-10 hover:brightness-110 ${getLevelClass(
								day.count,
							)}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
