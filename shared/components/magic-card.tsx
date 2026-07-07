"use client";

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "motion/react";
import type React from "react";
import { useCallback, useState } from "react";
import { cn } from "@/shared/lib/utils";

interface MagicCardProps {
	children?: React.ReactNode;
	className?: string;
	gradientSize?: number;
	gradientColor?: string;
	gradientOpacity?: number;
	gradientFrom?: string;
	gradientTo?: string;
}

export default function MagicCard({
	children,
	className,
	gradientSize = 200,
}: MagicCardProps) {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const [isHovered, setIsHovered] = useState(false);

	const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
	const smoothMouseX = useSpring(mouseX, springConfig);
	const smoothMouseY = useSpring(mouseY, springConfig);

	const handlePointerMove = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			const rect = e.currentTarget.getBoundingClientRect();
			mouseX.set(e.clientX - rect.left);
			mouseY.set(e.clientY - rect.top);
		},
		[mouseX, mouseY],
	);

	const handlePointerEnter = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			const rect = e.currentTarget.getBoundingClientRect();
			mouseX.set(e.clientX - rect.left);
			mouseY.set(e.clientY - rect.top);
			setIsHovered(true);
		},
		[mouseX, mouseY],
	);

	const handlePointerLeave = useCallback(() => {
		setIsHovered(false);
	}, []);

	return (
		<div
			className={cn("group relative rounded-[inherit]", className)}
			onPointerMove={handlePointerMove}
			onPointerLeave={handlePointerLeave}
			onPointerEnter={handlePointerEnter}
		>
			<motion.div
				className="bg-border pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 ease-out"
				style={{
					opacity: isHovered ? 1 : 0,
					background: useMotionTemplate`
          radial-gradient(${gradientSize}px circle at ${smoothMouseX}px ${smoothMouseY}px,
          var(--primary), 
          var(--primary), 
          var(--border) 100%
          )
          `,
				}}
			/>
			<div className="bg-card absolute inset-px rounded-[inherit]" />
			<div className="relative">{children}</div>
		</div>
	);
}
