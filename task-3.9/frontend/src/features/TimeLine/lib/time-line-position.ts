import { getMinsFromDayStart, HOURS_NUMBER, HOUR_HEIGHT, MINS_IN_HOUR } from 'shared/lib';

export const getTimeLinePosition = (date: Date) => {
	const minstFromDaySatrt = getMinsFromDayStart(date);
	return getVerticalPosition(minstFromDaySatrt);
};

const getVerticalPosition = (minsFromDayStart: number): number => {
	return (HOURS_NUMBER * HOUR_HEIGHT * minsFromDayStart) / (HOURS_NUMBER * MINS_IN_HOUR);
};
