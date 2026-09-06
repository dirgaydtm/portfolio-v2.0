import Reveal from "@/shared/animations/reveal";
import { profile } from "@/shared/data/profile";
import Contribution from "../components/contribution";
import HeroLinks from "../components/hero-links";
import ProfilePicture from "../components/profile-picture";
import { getContributions } from "../services/get-contributions";
import "../styles/animations.css";

export default async function Hero() {
	const contributions = await getContributions();

	return (
		<section
			id="hero"
			className="relative z-10 mx-auto flex min-h-screen lg:h-full w-full flex-col justify-between bg-background p-6 sm:p-10 lg:p-16 overflow-x-clip"
		>
			<div className="flex flex-col self-end text-right gap-1">
				<Reveal
					isHero
					once
					direction="right"
					as="h1"
					className="text-5xl sm:text-7xl md:text-9xl lg:text-[9vw] font-light lg:font-semibold uppercase lg:tracking-tighter leading-none text-foreground/90"
				>
					Dirgaa
				</Reveal>
				<Reveal
					isHero
					direction="right"
					once
					as="h1"
					delay={0.3}
					className="text-5xl sm:text-7xl md:text-9xl lg:text-[9vw] font-semibold lg:font-light uppercase tracking-tight leading-none text-muted-foreground md:mt-[-2vw] lg:mt-[-4vw]"
				>
					Yuditama
				</Reveal>
				<Reveal
					isHero
					once
					direction="right"
					as="p"
					delay={0.6}
					mode="auto"
					stagger={0.3}
					className="justify-end text-xl md:text-3xl lg:text-4xl font-light tracking-tight text-muted-foreground whitespace-nowrap"
				>
					Software Engineer
				</Reveal>
			</div>
			<ProfilePicture
				name={profile.name}
				avatar={profile.avatar}
				title={profile.title}
				unemployed={profile.availableForWork}
			/>
			<HeroLinks resumeUrl={profile.resumeUrl} socials={profile.socials} />
			<Contribution data={contributions} />
		</section>
	);
}
