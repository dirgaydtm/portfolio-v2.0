import { IoHomeSharp } from "react-icons/io5";
import Reveal from "@/shared/animations/reveal";
import { LayeredButton } from "@/shared/components/layered-button";
import type { CharacterColors } from "./curious-buddies";
import { CuriousBuddies } from "./curious-buddies";

const buddyColors: CharacterColors = {
	alto: "var(--buddy-alto)",
	shade: "var(--buddy-shade)",
	peach: "var(--buddy-peach)",
	sunny: "var(--buddy-sunny)",
	pupil: "var(--buddy-pupil)",
	eye: "var(--buddy-eye)",
};

export default function NotFoundSection() {
	return (
		<main className="h-screen relative flex justify-center items-center flex-col overflow-hidden bg-background">
			<div className="flex z-10 flex-col items-center text-center px-4">
				<h1 className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter text-foreground/5 select-none dark:[text-shadow:0_0_80px_var(--foreground)]">
					404
				</h1>

				<div className="relative -mt-20 space-y-2">
					<Reveal
						once
						direction="down"
						stagger={0.05}
						mode="auto"
						className="text-2xl md:text-5xl gap-1 md:h-16 justify-center font-bold text-foreground"
					>
						Hey Stranger, you seem lost...
					</Reveal>
					<Reveal
						once
						direction="down"
						stagger={0.05}
						mode="auto"
						boxClassName="h-5"
						className="text-primary justify-center text-base md:text-lg max-w-md mx-auto"
					>
						The page you&apos;re looking for has vanished into the void. Even
						our buddies can&apos;t find it.
					</Reveal>
					<div className="pt-6">
						<LayeredButton
							as="a"
							href="/"
							aria-label="Navigate to home page"
							size="lg"
						>
							<IoHomeSharp aria-hidden="true" />
							Take me home
						</LayeredButton>
					</div>
				</div>
			</div>

			{/* Curious Buddies - They're looking around confused */}
			<div
				className="absolute bottom-0 group left-0 overflow-hidden"
				aria-hidden="true"
			>
				<CuriousBuddies
					colors={buddyColors}
					className="transition-transform duration-500 group-hover:translate-y-60"
				/>
			</div>
		</main>
	);
}
