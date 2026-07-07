"use client";

import {
	AnimatePresence,
	type MotionValue,
	motion,
	type SpringOptions,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";
import React, {
	Children,
	cloneElement,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

export type DockItemData = {
	icon: React.ReactNode;
	label: string;
	onClick: () => void;
};

export type DockProps = {
	items: DockItemData[];
	className?: string;
	distance?: number;
	panelHeight?: number;
	baseItemSize?: number;
	dockHeight?: number;
	magnification?: number;
	spring?: SpringOptions;
};

type DockItemProps = {
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
	mouseX: MotionValue<number>;
	spring: SpringOptions;
	distance: number;
	baseItemSize: number;
	magnification: number;
};

function DockItem({
	children,
	className = "",
	onClick,
	mouseX,
	spring,
	distance,
	magnification,
	baseItemSize,
}: DockItemProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isHovered = useMotionValue(0);
	const x = useMotionValue(0);
	const tooltipSpringConfig = { stiffness: 100, damping: 5 };

	const rotate = useSpring(
		useTransform(x, [-100, 100], [-15, 15]),
		tooltipSpringConfig,
	);
	const translateX = useSpring(
		useTransform(x, [-100, 100], [-20, 20]),
		tooltipSpringConfig,
	);

	const mouseDistance = useTransform(mouseX, (val) => {
		const rect = ref.current?.getBoundingClientRect() ?? {
			x: 0,
			width: baseItemSize,
		};
		return val - rect.x - baseItemSize / 2;
	});

	const targetSize = useTransform(
		mouseDistance,
		[-distance, 0, distance],
		[baseItemSize, magnification, baseItemSize],
	);
	const size = useSpring(targetSize, spring);

	const handleItemMouseMove = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		const halfWidth = event.currentTarget.offsetWidth / 2;
		x.set(event.nativeEvent.offsetX - halfWidth);
	};

	return (
		<motion.div
			ref={ref}
			style={{
				width: size,
				height: size,
			}}
			onHoverStart={() => isHovered.set(1)}
			onHoverEnd={() => isHovered.set(0)}
			onFocus={() => isHovered.set(1)}
			onBlur={() => isHovered.set(0)}
			onMouseMove={handleItemMouseMove}
			onClick={onClick}
			className={`relative inline-flex items-center justify-center backdrop-blur-md rounded-lg border border-border shadow-sm transition-colors ${className || ""}`}
			tabIndex={0}
			role="button"
			aria-haspopup="true"
		>
			{Children.map(children, (child) =>
				React.isValidElement(child)
					? cloneElement(
							child as React.ReactElement<{
								isHovered?: MotionValue<number>;
								rotate?: MotionValue<number>;
								translateX?: MotionValue<number>;
							}>,
							{
								isHovered,
								rotate,
								translateX,
							},
						)
					: child,
			)}
		</motion.div>
	);
}

type DockLabelProps = {
	className?: string;
	children: React.ReactNode;
	isHovered?: MotionValue<number>;
	rotate?: MotionValue<number>;
	translateX?: MotionValue<number>;
};

function DockLabel({
	children,
	className = "",
	isHovered,
	rotate,
	translateX,
}: DockLabelProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!isHovered) return;
		const unsubscribe = isHovered.on("change", (latest) => {
			setIsVisible(latest === 1);
		});
		return () => unsubscribe();
	}, [isHovered]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, y: -10, scale: 0.8 }}
					animate={{
						opacity: 1,
						y: -20,
						scale: 1,
						transition: {
							type: "spring",
							stiffness: 260,
							damping: 10,
						},
					}}
					exit={{ opacity: 0, y: -10, scale: 0.8 }}
					style={{
						translateX: translateX,
						rotate: rotate,
						whiteSpace: "nowrap",
					}}
					className={`absolute z-50 -translate-x-1/2 -top-12 uppercase font-semibold left-1/2 hidden lg:flex w-fit whitespace-nowrap rounded-md border border-primary/40 bg-background/90 px-4 py-2 text-sm text-popover-foreground shadow-xl ${className || ""}`}
					role="tooltip"
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

type DockIconProps = {
	className?: string;
	children: React.ReactNode;
	isHovered?: MotionValue<number>;
};

function DockIcon({ children, className = "" }: DockIconProps) {
	return (
		<div className={`flex items-center justify-center ${className}`}>
			{children}
		</div>
	);
}

export default function Dock({
	items,
	className = "",
	spring = { mass: 0.1, stiffness: 150, damping: 12 },
	magnification = 70,
	distance = 200,
	panelHeight = 64,
	dockHeight = 256,
	baseItemSize = 50,
}: DockProps) {
	const mouseX = useMotionValue(Infinity);
	const isHovered = useMotionValue(0);

	const maxHeight = useMemo(
		() => Math.max(dockHeight, magnification + magnification / 2 + 4),
		[dockHeight, magnification],
	);
	const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
	const height = useSpring(heightRow, spring);

	return (
		<motion.div
			style={{ height, scrollbarWidth: "none" }}
			className="mx-2 flex max-w-full items-center"
		>
			<motion.div
				onMouseMove={({ pageX }) => {
					isHovered.set(1);
					mouseX.set(pageX);
				}}
				onMouseLeave={() => {
					isHovered.set(0);
					mouseX.set(Infinity);
				}}
				className={`absolute bottom-2 left-1/2 cursor-pointer transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border border-border bg-background/20 backdrop-blur-md pb-2 px-4 shadow-lg ${className || ""}`}
				style={{ height: panelHeight }}
				role="toolbar"
				aria-label="Application dock"
			>
				{items.map((item) => (
					<DockItem
						key={item.label}
						onClick={item.onClick}
						mouseX={mouseX}
						spring={spring}
						distance={distance}
						magnification={magnification}
						baseItemSize={baseItemSize}
					>
						<DockIcon>{item.icon}</DockIcon>
						<DockLabel>{item.label}</DockLabel>
					</DockItem>
				))}
			</motion.div>
		</motion.div>
	);
}
