"use client";

import {
	AnimatedSpan,
	Terminal,
	TypingAnimation,
} from "@/features/layout/components/terminal";
import { cn } from "@/shared/lib/utils";
import { useSplashScreen } from "../hooks/use-splash-screen";
import "../styles/animations.css";

export default function SplashScreen() {
	const { show, isHiding } = useSplashScreen();

	return (
		<div suppressHydrationWarning>
			{show && (
				<div className={cn("fixed inset-0 z-100 flex items-center justify-center bg-background", isHiding && "hiding")}>
					<div className="splash-terminal">
						<Terminal className="w-xs lg:w-sm shadow-2xl">
								<TypingAnimation duration={50}>
									$ sudo pacman -S portfolio
								</TypingAnimation>
								<AnimatedSpan delay={2200} className="text-green-500">
									Packages (1) portfolio-dirga-2.0.0
								</AnimatedSpan>
								<AnimatedSpan delay={2400}>
									Total Installed Size: 42.0 MiB
								</AnimatedSpan>
								<AnimatedSpan delay={2600}>
									Proceed with installation? [Y/n]
								</AnimatedSpan>
								<TypingAnimation delay={3000} duration={10}>
									Y
								</TypingAnimation>
								<AnimatedSpan delay={4000} className="text-cyan-400">
									(1/1) installing portfolio-dirga...
								</AnimatedSpan>
						</Terminal>
					</div>
				</div>
			)}
		</div>
	);
}
