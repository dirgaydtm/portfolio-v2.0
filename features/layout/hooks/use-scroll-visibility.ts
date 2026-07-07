"use client";

import { useCallback, useEffect, useState } from "react";

const SCROLL_THRESHOLD = 40;

export function useScrollVisibility() {
	const [isHidden, setIsHidden] = useState(false);

	const calculateVisibility = useCallback(() => {
		const scrollY = window.scrollY;
		const innerHeight = window.innerHeight;
		const offsetHeight = document.body.offsetHeight;
		return (
			innerHeight + scrollY >= offsetHeight - SCROLL_THRESHOLD || scrollY <= 0
		);
	}, []);

	const handleScroll = useCallback(() => {
		setIsHidden(calculateVisibility());
	}, [calculateVisibility]);

	useEffect(() => {
		requestAnimationFrame(() => {
			setIsHidden(calculateVisibility());
		});
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll, calculateVisibility]);

	return isHidden;
}
