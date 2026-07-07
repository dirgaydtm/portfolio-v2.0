import Fade from "@/shared/animations/fade";
import Reveal from "@/shared/animations/reveal";
import Shiny from "@/shared/animations/shiny";
import { Card, CardContent } from "@/shared/components/card";
import MagicCard from "@/shared/components/magic-card";
import { Separator } from "@/shared/components/separator";
import { profile } from "@/shared/data/profile";
import AvailableBadge from "./available-badge";
import ContactForm from "./contact-form";
import ContactSocials from "./contact-socials";
import MyLocation from "./my-location";

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="relative bg-background px-4 py-20 space-y-10 sm:px-6"
		>
			<div className="absolute inset-0 h-10 md:h-20 bg-background [clip-path:polygon(100%_0,100%_100%,0_0)]" />

			<div className="mx-auto flex flex-col items-center gap-4 max-w-6xl text-center">
				<AvailableBadge availableForWork={profile.availableForWork} />
				<Reveal once>
					<Shiny className="text-4xl font-bold tracking-tight text-foreground">
						Get In Touch
					</Shiny>
				</Reveal>
				<Reveal
					mode="auto"
					once
					direction="down"
					stagger={0.03}
					className="max-w-lg justify-center text-base md:text-lg text-muted-foreground"
				>
					Have a project in mind or just want to say hi? Feel free to reach out.
					I always open to discussing new opportunities.
				</Reveal>
			</div>

			<Fade once direction="down" staggerChildren={0.5} delay={0.5}>
				<div className="flex flex-col mx-auto max-w-5xl md:h-116 md:flex-row overflow-hidden justify-center gap-5">
					<MyLocation
						location={profile.location}
						position={[-7.9666, 112.6326]}
						className="flex-3 hidden xl:flex rounded-2xl border border-border shadow-sm"
					/>
					<Card className="p-0">
						<MagicCard className="h-full">
							<CardContent className="py-8">
								<ContactSocials
									email={profile.email}
									socials={profile.socials}
									className="flex justify-center flex-row gap-3 text-muted-foreground"
								/>
								<div className="flex items-center gap-4 my-4">
									<Separator className="flex-1" />
									<span className="text-sm text-muted-foreground whitespace-nowrap">
										or
									</span>
									<Separator className="flex-1" />
								</div>
								<ContactForm className="space-y-4" />
							</CardContent>
						</MagicCard>
					</Card>
				</div>
			</Fade>
		</section>
	);
}
