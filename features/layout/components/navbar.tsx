"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Code2, Briefcase, FolderKanban, Mail } from "lucide-react";
import Dock, { type DockItemData } from "@/features/layout/components/dock";
import { useScrollVisibility } from "../hooks/use-scroll-visibility";

export default function Navbar() {
    const isHidden = useScrollVisibility();

    const dockItems: DockItemData[] = useMemo(
        () => [
            {
                icon: <User />,
                label: "About",
                onClick: () => {
                    window.location.hash = "#hero";
                },
            },
            {
                icon: <Code2 />,
                label: "Skills",
                onClick: () => {
                    window.location.hash = "#skills";
                },
            },
            {
                icon: <Briefcase />,
                label: "Experience",
                onClick: () => {
                    window.location.hash = "#experience";
                },
            },
            {
                icon: <FolderKanban />,
                label: "Projects",
                onClick: () => {
                    window.location.hash = "#projects";
                },
            },
            {
                icon: <Mail />,
                label: "Contact",
                onClick: () => {
                    window.location.hash = "#contact";
                },
            },
        ],
        []
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

