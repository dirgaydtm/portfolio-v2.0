import Link from "next/link";
import { Separator } from "@/shared/components/separator";
import { profile } from "@/shared/data/profile";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-background">
			<div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
				<div className="flex items-center justify-between flex-row">
					<div className="flex items-center gap-2 md:gap-4">
						<Link
							href="/"
							className="text-lg font-bold tracking-tight text-foreground"
						>
							{profile.name.split(" ")[0]}
						</Link>
						<Separator orientation="vertical" className="h-6" />
						<p className="text-sm text-muted-foreground">{profile.title}</p>
					</div>

					<div className="flex items-center gap-2 md:gap-4">
						{profile.socials.map((social) => {
							const Icon = social.icon;
							return (
								<a
									key={`${social.name}-${social.url}`}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground transition-colors hover:text-foreground"
									aria-label={social.name}
								>
									<Icon className="h-5 w-5" />
									<span className="sr-only">{social.name}</span>
								</a>
							);
						})}
					</div>
				</div>

				<Separator className="my-6" />

				<div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
					<p>
						© {currentYear} {profile.name}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
