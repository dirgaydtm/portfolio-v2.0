"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Code2, FolderKanban, Mail, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo } from "react";
import Dock, { type DockItemData } from "@/features/layout/components/dock";
import { useScrollVisibility } from "../hooks/use-scroll-visibility";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

const NAV_ITEMS = [
	{ icon: <User />, label: "About", id: "hero" },
	{ icon: <Code2 />, label: "Skills", id: "skills" },
	{ icon: <Briefcase />, label: "Experience", id: "experience" },
	{ icon: <FolderKanban />, label: "Projects", id: "projects" },
	{ icon: <Mail />, label: "Contact", id: "contact" },
];

const getScrollTarget = (id: string): number | string => {
	const el = document.getElementById(id);
	if (!el) return `#${id}`;
	const st = ScrollTrigger.getAll().find(
		(t) => t.pin?.contains(el) || t.pin === el,
	);
	if (!st?.pin) return `#${id}`;
	const slides = Array.from(st.pin.querySelectorAll("[id]"));
	return (
		st.start +
		(slides.indexOf(el) / Math.max(slides.length - 1, 1)) * (st.end - st.start)
	);
};

export default function Navbar() {
	const isHidden = useScrollVisibility();

	const dockItems: DockItemData[] = useMemo(
		() =>
			NAV_ITEMS.map((item) => ({
				...item,
				onClick: () => {
					gsap.to(window, {
						duration: 0.8,
						scrollTo: { y: getScrollTarget(item.id), autoKill: false },
						ease: "power2.inOut",
					});
				},
			})),
		[],
	);

	return (
		<AnimatePresence>
			{!isHidden && (
				<motion.nav
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					transition={{ type: "spring", stiffness: 400, damping: 30 }}
					className="fixed bottom-0 md:bottom-5 inset-x-0 z-50"
					aria-label="Main navigation"
				>
					<Dock
						items={dockItems}
						baseItemSize={50}
						distance={150}
						panelHeight={68}
						dockHeight={68}
						className="backdrop-blur-md"
					/>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
