"use client";

import { AnimatePresence, motion } from "motion/react";
import {
	AnimatedSpan,
	Terminal,
	TypingAnimation,
} from "@/features/layout/components/terminal";
import { useSplashScreen } from "../hooks/use-splash-screen";

export default function SplashScreen() {
	const show = useSplashScreen();

	return (
		<div suppressHydrationWarning>
			<AnimatePresence mode="wait">
				{show && (
					<motion.div
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 1,
							ease: [0.43, 0.13, 0.23, 0.96],
						}}
						className="fixed inset-0 z-100 flex items-center justify-center bg-background"
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.95, opacity: 0, y: -100 }}
							transition={{
								duration: 0.6,
								ease: "easeOut",
							}}
						>
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
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
