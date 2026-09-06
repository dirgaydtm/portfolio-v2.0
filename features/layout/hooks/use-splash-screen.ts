import { useEffect, useState } from "react";

export function useSplashScreen() {
	const [show, setShow] = useState(true);
	const [isHiding, setIsHiding] = useState(false);

	useEffect(() => {
		if (sessionStorage.getItem("hasVisited")) return setShow(false);

		const timer = setTimeout(() => {
			setIsHiding(true);
			setTimeout(() => {
				setShow(false);
				sessionStorage.setItem("hasVisited", "true");
			}, 1000); // wait for exit animation (1s)
		}, 6000); // wait for splash screen (6s)

		return () => clearTimeout(timer);
	}, []);

	return { show, isHiding };
}
