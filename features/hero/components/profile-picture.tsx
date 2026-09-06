import Image from "next/image";
import type React from "react";
import { SiArchlinux } from "react-icons/si";
import { cn } from "@/shared/lib/utils";

interface ProfilePictureProps {
	name: string;
	title: string;
	avatar: string;
	unemployed?: boolean;
	className?: string;
	style?: React.CSSProperties;
	delay?: number;
}

export default function ProfilePicture({
	name,
	avatar,
	unemployed,
	className,
	style,
}: ProfilePictureProps) {
	return (
		<div
			style={style}
			className={cn(
				"absolute top-1/2 left-12 sm:left-24 lg:left-96 -translate-y-2/5 z-30 pointer-events-auto animate-float w-56 sm:w-sm lg:w-md aspect-3/4 rounded-2xl p-2 bg-neutral-900/30 backdrop-blur-xs border border-white/15 transition-transform duration-500 ease-out -rotate-3 sm:-rotate-5 hover:scale-[1.03]",
				className,
			)}
		>
			<span
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 z-40 bg-white animate-profile-curtain"
				style={{ animationDelay: "calc(var(--splash-delay, 6.8s))" }}
			/>
			<div className="relative text-xs h-full w-full overflow-hidden rounded-xl bg-neutral-950">
				<Image
					src={avatar}
					alt={name}
					width={400}
					height={533}
					priority
					className="h-full w-full object-cover object-top contrast-110 -scale-x-100"
				/>
				<div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 w-fit tracking-wider text-neutral-200">
					<SiArchlinux className="animate-pulse" />I Use Arch BTW
				</div>
				{unemployed && (
					<div className="absolute not-lg:hidden bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 w-fit tracking-wider text-neutral-200">
						Open To Work
					</div>
				)}
			</div>
		</div>
	);
}
