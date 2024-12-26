export const hours: string[] = new Array(24).fill(0).map((_, i) => {
	if (i === 0) return '';
	const timeDefinition = i < 12 ? 'am' : 'pm';
	const time = i < 13 ? i : i - 12;
	return `${time} ${timeDefinition}`;
});
