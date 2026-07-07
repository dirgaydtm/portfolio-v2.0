"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { memo, useMemo } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/shared/components/carousel";
import { techStack } from "../data/tech-stack";

function TechStacksCarousel({ className }: { className?: string }) {
	const techStackItems = useMemo(() => {
		return Object.values(techStack).flatMap((group) => group.items);
	}, []);
	return (
		<section className={className}>
			<Carousel
				opts={{ loop: true }}
				plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
			>
				<CarouselContent className="h-40">
					{techStackItems.map((tech) => (
						<CarouselItem
							key={tech.name}
							className="flex justify-center basis-1/12 md:basis-1/8"
						>
							<div className="flex shrink-0 items-center justify-center hover:animate-spin">
								<tech.icon
									className="h-10 w-10 text-foreground/80"
									aria-label={tech.name}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent" />
			<div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent" />
		</section>
	);
}

export default memo(TechStacksCarousel);
