export interface MenuSettings {
	minWidth: number;
	position: Position;
}

export interface Position {
	top: number;
	left: number;
}

type PotentialElement = HTMLElement | undefined | null;

export const calculateMenuSettings = (el?: PotentialElement): MenuSettings => {
	if (!el) return { position: { left: 0, top: 0 }, minWidth: 200 };
	const { x, y, height, width } = el.getBoundingClientRect();
	return { position: { top: y + height + 2, left: x + width / 2 }, minWidth: width };
};
