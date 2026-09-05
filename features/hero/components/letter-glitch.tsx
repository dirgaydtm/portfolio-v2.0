"use client";

import { memo, useEffect, useRef } from "react";
import { cn } from "@/shared/lib/utils";

const COLORS = ["#1a1a1a", "#333333", "#555555", "#777777", "#999999"];
const CHARS = ["0", "1"];
const FONT_SIZE = 18;
const CHAR_W = 12;
const CHAR_H = 25;
const SPEED = 50;
const CHAR_BITS = 4;
const CHAR_MASK = 15; // 0b1111

interface GlitchState {
	cols: number;
	cells: Uint8Array;
	toUpdate: Int32Array;
	updateCount: number;
	lastTick: number;
}

function useGlitchResize(
	canvasRef: React.RefObject<HTMLCanvasElement | null>,
	state: React.MutableRefObject<GlitchState>,
) {
	useEffect(
		function handleResizeAndInit() {
			const canvas = canvasRef.current;
			const ctx = canvas?.getContext("2d", { alpha: false });
			if (!canvas || !ctx) return;

			const onResize = () => {
				const p = canvas.parentElement;
				if (!p) return;
				const { width, height } = p.getBoundingClientRect();

				canvas.width = width;
				canvas.height = height;
				canvas.style.width = `${width}px`;
				canvas.style.height = `${height}px`;

				const cols = Math.ceil(width / CHAR_W);
				const rows = Math.ceil(height / CHAR_H);
				const totalCells = cols * rows;

				const cells = new Uint8Array(totalCells);
				for (let i = 0; i < totalCells; i++) {
					const colorIdx = Math.floor(Math.random() * COLORS.length);
					const charIdx = Math.floor(Math.random() * CHARS.length);
					cells[i] = (colorIdx << CHAR_BITS) | charIdx;
				}

				const updateCount = Math.max(1, Math.floor(totalCells * 0.05));
				const toUpdate = new Int32Array(updateCount);

				state.current.cols = cols;
				state.current.cells = cells;
				state.current.toUpdate = toUpdate;
				state.current.updateCount = updateCount;

				ctx.fillStyle = "#000000";
				ctx.fillRect(0, 0, width, height);
				ctx.font = `${FONT_SIZE}px monospace`;
				ctx.textBaseline = "top";

				for (let c = 0; c < COLORS.length; c++) {
					ctx.fillStyle = COLORS[c];
					for (let i = 0; i < totalCells; i++) {
						if (cells[i] >> CHAR_BITS === c) {
							ctx.fillText(
								CHARS[cells[i] & CHAR_MASK],
								(i % cols) * CHAR_W,
								Math.floor(i / cols) * CHAR_H,
							);
						}
					}
				}
			};

			onResize();
			window.addEventListener("resize", onResize);
			return () => window.removeEventListener("resize", onResize);
		},
		[canvasRef, state],
	);
}

function useGlitchAnimation(
	canvasRef: React.RefObject<HTMLCanvasElement | null>,
	state: React.MutableRefObject<GlitchState>,
) {
	useEffect(
		function runAnimationLoop() {
			const canvas = canvasRef.current;
			const ctx = canvas?.getContext("2d", { alpha: false });
			if (!canvas || !ctx) return;

			let rafId = 0;

			const tick = (ts: number) => {
				// Extract via destructuring agar akses secepat local variable (Closure)
				const { cols, cells, toUpdate, updateCount, lastTick } = state.current;

				if (ts - lastTick >= SPEED && updateCount > 0) {
					for (let i = 0; i < updateCount; i++) {
						const idx = Math.floor(Math.random() * cells.length);
						const colorIdx = Math.floor(Math.random() * COLORS.length);
						const charIdx = Math.floor(Math.random() * CHARS.length);

						toUpdate[i] = idx;
						cells[idx] = (colorIdx << CHAR_BITS) | charIdx;
					}

					ctx.fillStyle = "#000000";
					for (let i = 0; i < updateCount; i++) {
						const idx = toUpdate[i];
						ctx.fillRect(
							(idx % cols) * CHAR_W,
							Math.floor(idx / cols) * CHAR_H,
							CHAR_W,
							CHAR_H,
						);
					}

					ctx.font = `${FONT_SIZE}px monospace`;
					ctx.textBaseline = "top";
					for (let c = 0; c < COLORS.length; c++) {
						ctx.fillStyle = COLORS[c];
						for (let i = 0; i < updateCount; i++) {
							const idx = toUpdate[i];
							const val = cells[idx];
							if (val >> CHAR_BITS === c) {
								ctx.fillText(
									CHARS[val & CHAR_MASK],
									(idx % cols) * CHAR_W,
									Math.floor(idx / cols) * CHAR_H,
								);
							}
						}
					}

					state.current.lastTick = ts;
				}
				rafId = requestAnimationFrame(tick);
			};

			rafId = requestAnimationFrame(tick);
			return () => cancelAnimationFrame(rafId);
		},
		[canvasRef, state],
	);
}

function LetterGlitch({ className }: { className?: string }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const state = useRef<GlitchState>({
		cols: 0,
		cells: new Uint8Array(0),
		toUpdate: new Int32Array(0),
		updateCount: 0,
		lastTick: 0,
	});

	useGlitchResize(canvasRef, state);
	useGlitchAnimation(canvasRef, state);

	return (
		<div className={cn(className, "relative w-full h-full overflow-hidden")}>
			<canvas ref={canvasRef} className="block w-full h-full" />
		</div>
	);
}

export default memo(LetterGlitch);
