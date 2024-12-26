export const toSpliced = <T>(array: T[], start: number, deleteCount: number, ...items: T[]): T[] => {
	const copy = [...array];
	copy.splice(start, deleteCount, ...items);
	return copy;
};
