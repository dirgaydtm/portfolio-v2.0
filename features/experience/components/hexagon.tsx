"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";

interface HexagonBackgroundProps {
	className?: string;
	children?: React.ReactNode;
	hexagonSize?: number;
	hexagonMargin?: number;
}

export default function HexagonBackground({
	className,
	children,
	hexagonSize = 60,
	hexagonMargin = 0,
}: HexagonBackgroundProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [grid, setGrid] = useState({ rows: 0, cols: 0, scale: 1 });

	const hexHeight = hexagonSize * 1.15;

	const updateGrid = useCallback(() => {
		const container = containerRef.current;
		if (!container) return;
		const { width, height } = container.getBoundingClientRect();
		const scale = Math.max(1, Math.min(width, height) / 800);
		const scaledSize = hexagonSize * scale;
		setGrid({
			rows: Math.ceil(height / (scaledSize * 0.86)) + 2,
			cols: Math.ceil(width / scaledSize) + 2,
			scale,
		});
	}, [hexagonSize]);

	useEffect(() => {
		updateGrid();
		const container = containerRef.current;
		if (!container) return;
		const ro = new ResizeObserver(updateGrid);
		ro.observe(container);
		return () => ro.disconnect();
	}, [updateGrid]);

	const scaledWidth = hexagonSize * grid.scale;
	const scaledHeight = hexHeight * grid.scale;
	const scaledMargin = hexagonMargin * grid.scale;

	const hexStyle = useMemo(
		() => ({
			width: scaledWidth,
			height: scaledHeight,
			marginLeft: scaledMargin,
			"--margin": `${scaledMargin}px`,
		}),
		[scaledWidth, scaledHeight, scaledMargin],
	);

	const hexClip =
		"[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

	const rowItems = useMemo(
		() => Array.from({ length: grid.rows }, (_, i) => ({ id: `row-${i}`, i })),
		[grid.rows],
	);

	const colItems = useMemo(
		() => Array.from({ length: grid.cols }, (_, i) => ({ id: `col-${i}`, i })),
		[grid.cols],
	);

	return (
		<div
			ref={containerRef}
			className={cn(
				"absolute inset-0 overflow-hidden bg-background",
				className,
			)}
		>
			<div className="absolute inset-0 overflow-hidden">
				{rowItems.map((row) => (
					<div
						key={row.id}
						className="flex"
						style={{
							marginTop: -scaledHeight * 0.25,
							marginLeft:
								(row.i % 2 === 1 ? -scaledWidth / 2 : 0) +
								scaledMargin -
								scaledWidth * 0.1,
						}}
					>
						{colItems.map((col) => (
							<div
								key={`${row.id}-${col.id}`}
								className={cn(
									"relative shrink-0",
									hexClip,
									"before:absolute before:inset-0 before:bg-border before:transition-colors before:duration-1000",
									"after:absolute after:inset-(--margin) after:bg-background after:[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] after:transition-colors after:duration-500",
									"hover:before:bg-primary/60 hover:before:shadow-[0_0_20px_var(--color-primary)] hover:before:duration-0",
									"hover:after:bg-card hover:after:duration-0",
								)}
								style={hexStyle as React.CSSProperties}
							/>
						))}
					</div>
				))}
			</div>

			{children && (
				<div className="relative z-10 h-full w-full">{children}</div>
			)}
		</div>
	);
}
