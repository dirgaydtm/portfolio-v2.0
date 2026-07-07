"use client";

import Image from "next/image";
import { memo } from "react";

interface ProfilePictureProps {
	name: string;
	title: string;
	avatar: string;
	className?: string;
}

function ProfilePicture({
	name,
	title,
	avatar,
	className,
}: ProfilePictureProps) {
	return (
		<div className={className}>
			<div className="absolute animate-float-2 [animation-delay:0.5s] inset-0 bg-border border rounded-2xl transform -rotate-6 dark:border-primary/20 translate-y-4 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0"></div>
			<div className="relative animate-float-2  h-full w-full rounded-2xl overflow-hidden border dark:border-primary/50 bg-background transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_100px_rgba(100,100,100,0.4)]">
				<Image
					src={avatar}
					alt={`${name} - ${title}`}
					className="object-cover h-full opacity-85 group-hover:opacity-100 transition-opacity duration-500"
					width={2000}
					height={3000}
					priority
				/>
				<div className="absolute -bottom-1 left-0 right-0 h-20 bg-background/80 backdrop-blur-xl [clip-path:polygon(0_0,100%_40%,100%_100%,0_100%)]" />
				<div className="absolute bottom-0 p-3">
					<p className="text-primary font-bold text-sm md:text-lg">{name}</p>
					<p className="text-muted-foreground text-sm">{title}</p>
				</div>
			</div>
		</div>
	);
}

export default memo(ProfilePicture);
