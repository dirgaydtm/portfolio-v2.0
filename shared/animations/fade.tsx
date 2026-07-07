"use client";
import { motion, useInView, type Variants } from "motion/react";
import * as React from "react";

interface FadeProps {
	direction: "up" | "down";
	children: React.ReactNode;
	className?: string;
	staggerChildren?: number;
	delay?: number;
	once?: boolean;
}
export default function Fade({
	direction,
	children,
	className = "",
	staggerChildren = 0.1,
	delay = 0,
	once = false,
}: FadeProps) {
	const FADE_DOWN = {
		show: { opacity: 1, y: 0, transition: { type: "spring" } },
		hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
	};
	const ref = React.useRef(null);
	const isInView = useInView(ref, { amount: 0.2, once });
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "show" : "hidden"}
			variants={{
				hidden: {},
				show: {
					transition: {
						delayChildren: delay,
						staggerChildren: staggerChildren,
					},
				},
			}}
			className={className}
		>
			{React.Children.map(children, (child) =>
				React.isValidElement(child) ? (
					<motion.div variants={FADE_DOWN as Variants}>{child}</motion.div>
				) : (
					child
				),
			)}
		</motion.div>
	);
}
