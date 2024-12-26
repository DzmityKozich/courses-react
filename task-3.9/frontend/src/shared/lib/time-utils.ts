export const getMinsFromDayStart = (date: Date): number => {
	const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	const diffInMs = date.valueOf() - dateStart.valueOf();
	return Math.round(diffInMs / (60 * 1000));
};

export const getDurationInMins = (startTime: Date, endTime: Date): number => {
	const start = new Date(startTime);
	const end = new Date(endTime);
	const diffInMs = end.valueOf() - start.valueOf();
	return Math.round(diffInMs / (60 * 1000));
};
