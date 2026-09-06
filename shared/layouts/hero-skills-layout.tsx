"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	Children,
	type ReactElement,
	type ReactNode,
	useEffect,
	useRef,
} from "react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function HeroSkillsLayout({
	children,
}: {
	children: ReactNode;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const slides = Children.toArray(children) as ReactElement[];
	const count = slides.length;

	useEffect(() => {
		const [container, track] = [containerRef.current, trackRef.current];
		if (!container || !track || count <= 1) return;

		const mm = gsap.matchMedia();
		mm.add("(min-width: 1024px)", () => {
			gsap
				.timeline({
					scrollTrigger: {
						id: "hero-slider",
						trigger: container,
						start: "top top",
						end: `+=${(count - 1) * 100}%`,
						pin: true,
						pinSpacing: true,
						scrub: 0.8,
						invalidateOnRefresh: true,
					},
				})
				.to(track, { xPercent: -100 * ((count - 1) / count), ease: "none" }, 0)
				.to(track.children[0], { opacity: 0.85, ease: "none" }, 0);
		});

		return () => mm.revert();
	}, [count]);

	return (
		<div
			ref={containerRef}
			className="relative w-full lg:h-screen lg:overflow-hidden"
		>
			<div
				ref={trackRef}
				style={{ width: `${count * 100}vw` }}
				className="flex flex-col lg:flex-row lg:h-full will-change-transform max-lg:w-full!"
			>
				{slides.map((slide) => (
					<div
						key={slide.key}
						className="w-full lg:w-screen lg:h-full lg:shrink-0"
					>
						{slide}
					</div>
				))}
			</div>
		</div>
	);
}
