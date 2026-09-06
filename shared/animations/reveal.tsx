"use client";

import { motion, useAnimation, useInView } from "motion/react";
import React, { useRef } from "react";
import { cn } from "@/shared/lib/utils";

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	boxClassName?: string;
	delay?: number;
	duration?: number;
	direction?: "up" | "down" | "left" | "right";
	mode?: "manual" | "auto";
	stagger?: number;
	once?: boolean;
	as?: React.ElementType;
	isHero?: boolean;
}

const baseBoxStyles =
	"absolute inset-0 z-10 bg-neutral-900 dark:bg-neutral-100";

const animValues = {
	up: { initial: { scaleY: 1, originY: 0 }, animate: { scaleY: 0 } },
	down: { initial: { scaleY: 1, originY: 1 }, animate: { scaleY: 0 } },
	left: { initial: { scaleX: 1, originX: 0 }, animate: { scaleX: 0 } },
	right: { initial: { scaleX: 1, originX: 1 }, animate: { scaleX: 0 } },
};

export default function Reveal({
	children,
	className = "",
	boxClassName = "",
	delay = 0,
	duration = 0.8,
	direction = "down",
	mode = "manual",
	stagger = 0.1,
	once = false,
	as: Component = "span",
	isHero = false,
}: RevealProps) {
	const ref = useRef(null);
	const inView = useInView(ref, { once });
	const controls = useAnimation();
	const isNoSplash =
		typeof document !== "undefined" &&
		document.documentElement.classList.contains("no-splash");
	const totalDelay = delay + (isHero && !isNoSplash ? 6 : 0);

	React.useEffect(() => {
		if (inView) {
			controls.set("initial");
			controls.start("animate");
		} else if (!once) {
			controls.start("initial");
		}
	}, [inView, controls, once]);

	const renderBox = (
		d: number,
		content: React.ReactNode,
		key?: string,
		itemClass?: string,
		Wrapper: React.ElementType = "span",
		wrapperRef?: React.Ref<HTMLSpanElement>,
	) => (
		<Wrapper
			ref={wrapperRef}
			key={key}
			className={cn("relative inline-block", itemClass)}
		>
			<motion.span
				aria-hidden="true"
				variants={animValues[direction]}
				initial="initial"
				animate={controls}
				transition={{ delay: d, duration, ease: [0.76, 0, 0.24, 1] }}
				className={cn(baseBoxStyles, boxClassName)}
			/>
			<motion.span
				variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
				initial="initial"
				animate={controls}
				transition={{
					delay: d + duration * 0.5,
					duration: duration * 0.5,
				}}
				className="inline-block"
			>
				{content}
			</motion.span>
		</Wrapper>
	);

	if (mode === "auto" && typeof children === "string") {
		const words = children.split(" ");
		return (
			<Component ref={ref} className={cn("flex flex-wrap", className)}>
				{words.map((w, i) =>
					renderBox(
						totalDelay + i * stagger,
						w,
						`${w}-${i}`,
						i < words.length - 1 ? "mr-1" : "",
					),
				)}
			</Component>
		);
	}

	return renderBox(totalDelay, children, undefined, className, Component, ref);
}
