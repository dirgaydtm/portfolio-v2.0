"use client";

import { useEffect, useState } from "react";

const SPLASH_DURATION = 5000;
const STORAGE_KEY = "hasVisited";

export function useSplashScreen() {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const visited = sessionStorage.getItem(STORAGE_KEY);

		if (visited) {
			setTimeout(() => setShow(false), 0);
			return;
		}

		const timer = setTimeout(() => {
			setShow(false);
			sessionStorage.setItem(STORAGE_KEY, "true");
		}, SPLASH_DURATION);

		return () => clearTimeout(timer);
	}, []);

	return show;
}
