"use client";

import { useEffect, useState } from "react";

const SPLASH_DURATION = 6000;
const STORAGE_KEY = "hasVisited";

export function useSplashScreen() {
	const [show, setShow] = useState(true);
	const [isHiding, setIsHiding] = useState(false);

	useEffect(() => {
		const visited = sessionStorage.getItem(STORAGE_KEY);

		// Di dev, selalu tampilkan splash screen untuk testing
		// Di production, sembunyikan
		if (visited === "true" && process.env.NODE_ENV !== "development") {
			setTimeout(() => setShow(false), 0);
			return;
		}

		const timer = setTimeout(() => {
			setIsHiding(true);
			setTimeout(() => {
				setShow(false);
				sessionStorage.setItem(STORAGE_KEY, "true");
			}, 1000); // Wait for exit animation (1s)
		}, SPLASH_DURATION);

		return () => clearTimeout(timer);
	}, []);

	return { show, isHiding };
}
