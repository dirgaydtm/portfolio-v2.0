import { PiDownloadSimple, PiHandWaving } from "react-icons/pi";
import { SiArchlinux } from "react-icons/si";
import { LayeredButton } from "@/shared/components/layered-button";
import { Separator } from "@/shared/components/separator";
import { profile } from "@/shared/data/profile";
import LetterGlitch from "./letter-glitch";
import ProfilePicture from "./profile-picture";
import SocialButton from "./social-button";

export default function HeroSection() {
	return (
		<section
			id="hero"
			className="relative flex h-screen flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
		>
			{/* Background with glitch + overlay */}
			<div className="absolute inset-0 hidden h-7/10 dark:flex z-0">
				<LetterGlitch className="h-1/2!" />
				<div className="absolute h-full w-full bottom-0 bg-linear-to-t from-background via-background to-background/50" />
			</div>

			{/* Main content */}
			<div className="z-1 mx-auto flex gap-12 max-w-3xl flex-col items-center">
				<ProfilePicture
					name={profile.name}
					title={profile.title}
					avatar={profile.avatar}
					className="relative group my-6 w-46 h-60 md:w-80 md:h-96"
				/>
				<div className="flex flex-col gap-6 items-center">
					<span className="block md:hidden max-w-xl text-base text-center leading-relaxed text-muted-foreground">
						{profile.bio} I use <SiArchlinux className="inline-flex" /> btw.
					</span>
					<span className="md:block hidden max-w-xl text-base text-center text-muted-foreground">
						{profile.description} I use <SiArchlinux className="inline-flex" />{" "}
						btw.
					</span>
					<Separator className="md:block hidden w-full" />
					<span className="flex flex-wrap items-center justify-center gap-4">
						<LayeredButton
							as="a"
							href="#contact"
							aria-label="Navigate to contact section"
							variant="outline"
							size="lg"
							className="w-30 md:w-auto"
						>
							<PiHandWaving className="h-4 w-4" aria-hidden="true" />
							Say Hi!
						</LayeredButton>
						<LayeredButton
							as="a"
							href={profile.resumeUrl}
							download
							aria-label="Download resume"
							size="lg"
							className="w-30 md:w-auto"
						>
							<PiDownloadSimple className="h-4 w-4" aria-hidden="true" />
							Resume
						</LayeredButton>
						<SocialButton socials={profile.socials} className="flex gap-4" />
					</span>
				</div>
			</div>
			<Separator className="absolute bottom-0 max-w-400" />
		</section>
	);
}
