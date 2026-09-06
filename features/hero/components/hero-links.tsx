import ArrowLink from "@/shared/components/arrow-link";
import type { SocialLink } from "@/shared/types/profile";

interface HeroLinksProps {
	resumeUrl: string;
	socials: readonly SocialLink[];
}

export default function HeroLinks({ resumeUrl, socials }: HeroLinksProps) {
	return (
		<div className="flex flex-wrap items-center pb-16 sm:pb-24 md:pb-32 lg:pb-0 justify-end self-end gap-4 lg:gap-8 z-20">
			<span
				className="animate-fade-up inline-flex"
				style={{ animationDelay: "calc(var(--splash-delay, 6s) + 0.8s)" }}
			>
				<ArrowLink href="#contact">Say Hi!</ArrowLink>
			</span>
			<span
				className="animate-fade-up inline-flex"
				style={{ animationDelay: "calc(var(--splash-delay, 6s) + 0.92s)" }}
			>
				<ArrowLink href={resumeUrl} download>
					Resume
				</ArrowLink>
			</span>
			{socials.map((social, i) => (
				<span
					key={social.url}
					className="animate-fade-up not-lg:hidden inline-flex"
					style={{
						animationDelay: `calc(var(--splash-delay, 6s) + ${(1.04 + i * 0.12).toFixed(2)}s)`,
					}}
				>
					<ArrowLink href={social.url} external>
						{social.platform}
					</ArrowLink>
				</span>
			))}
		</div>
	);
}
