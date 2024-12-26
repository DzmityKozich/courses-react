export interface MenuSettings {
	minWidth: number;
	height: number;
	position: Position;
}

export interface Position {
	top: number;
	left: number;
}

type PotentialElement = HTMLElement | undefined | null;

export const calculatePopover = (targetEl: PotentialElement, popoverEl: PotentialElement): MenuSettings => {
	if (popoverEl && targetEl) {
		const { height: pHeight } = popoverEl.getBoundingClientRect();
		const { x: targetX, y: targetY, height: targetHeight, width: targetWidth, bottom: py } = targetEl.getBoundingClientRect();
		const viewHeight = window.innerHeight;
		if (py + pHeight < viewHeight) {
			const height = Math.min(400, pHeight);
			return { position: { top: targetY + targetHeight + 2, left: targetX + targetWidth / 2 }, minWidth: targetWidth, height };
		}
		if (targetY > 410) {
			const height = Math.min(400, pHeight);
			const top = targetY - height - 2;
			return { position: { left: targetX + targetWidth / 2, top }, minWidth: targetWidth, height };
		}
		const posibleHeight = Math.max(viewHeight - py - 10, 100);
		return {
			minWidth: targetWidth,
			position: { top: targetY + targetHeight + 2, left: targetX + targetWidth / 2 },
			height: posibleHeight,
		};
	}
	return { height: 400, minWidth: 200, position: { left: 0, top: 0 } };
};
