"use client";

import Image from "next/image";
import { AspectRatio } from "@/shared/components/aspect-ratio";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/shared/components/carousel";
import type { Project } from "../types/project";

interface ProjectCarouselProps {
	project: Project;
	className?: string;
}

export default function ProjectCarousel({
	project,
	className,
}: ProjectCarouselProps) {
	if (project.images.length === 0) {
		return null;
	}

	return (
		<section
			className={className}
			aria-label={`${project.title} image gallery`}
		>
			<Carousel className="w-full">
				<CarouselContent>
					{project.images.map((image, index) => (
						<CarouselItem key={image}>
							<div className="relative overflow-hidden rounded-lg">
								<AspectRatio ratio={16 / 9}>
									<Image
										src={image}
										alt={`${project.title} screenshot ${index + 1} of ${project.images.length}`}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
										className="object-contain transition-transform scale-102 duration-300 hover:scale-105 cursor-grab"
										loading={index === 0 ? "eager" : "lazy"}
									/>
								</AspectRatio>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious
					className="cursor-pointer md:-left-16 left-2"
					aria-label="Previous image"
				/>
				<CarouselNext
					className="cursor-pointer md:-right-16 right-2"
					aria-label="Next image"
				/>
			</Carousel>
		</section>
	);
}
