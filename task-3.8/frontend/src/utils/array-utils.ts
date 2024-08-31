export const toSpliced = <T = any>(array: T[], start: number, deleteCount: number, ...items: T[]): T[] => {
	const copy = [...array];
	copy.splice(start, deleteCount, ...items);
	return copy;
};
