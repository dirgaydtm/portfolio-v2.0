import type { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/shared/lib/utils";

export interface ShinyProps extends ComponentPropsWithoutRef<"span"> {
	shimmerWidth?: number;
}

export default function Shiny({
	children,
	className,
	shimmerWidth = 100,
	...props
}: ShinyProps) {
	return (
		<span
			style={
				{
					"--shiny-width": `${shimmerWidth}px`,
				} as CSSProperties
			}
			className={cn(
				"mx-auto max-w-md text-primary/70 dark:text-primary/80",

				// Shine effect
				"animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

				// Shine gradient
				"bg-linear-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white",

				className,
			)}
			{...props}
		>
			{children}
		</span>
	);
}
