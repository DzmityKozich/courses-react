import { DatepickerDate } from './DatepikerDate';

export const getMonthData = (year: number, month: number): DatepickerDate[][] => {
	const daysInMonth = getDaysInMonth(year, month);
	const fullDates = addMissingDates(daysInMonth);
	const dates = fullDates.map((date) => new DatepickerDate(date));
	return splitByWeeks(dates);
};

const getDaysInMonth = (year: number, month: number) => {
	let date = new Date(year, month, 1);
	const days: Date[] = [];

	while (date.getMonth() === month) {
		days.push(new Date(date));
		date.setDate(date.getDate() + 1);
	}

	return days;
};

const splitByWeeks = (dates: DatepickerDate[]): DatepickerDate[][] => {
	return dates.reduce((weeks, date) => {
		let lastWeek = weeks.at(-1);
		if (!lastWeek) {
			lastWeek = [];
			weeks.push(lastWeek);
		}
		if (lastWeek.length < 7) {
			lastWeek.push(date);
		} else {
			lastWeek = [date];
			weeks.push(lastWeek);
		}
		return weeks;
	}, [] as DatepickerDate[][]);
};

const addMissingDates = (dates: Date[]): Date[] => {
	const firstDate = new Date(dates[0]);
	const lastDate = new Date(dates.at(-1)!);
	const startAdditional: Date[] = [];
	const endAdditional: Date[] = [];

	while (firstDate.getDay() !== 1) {
		firstDate.setDate(firstDate.getDate() - 1);
		startAdditional.unshift(new Date(firstDate));
	}

	while (lastDate.getDay() !== 0) {
		lastDate.setDate(lastDate.getDate() + 1);
		endAdditional.push(new Date(lastDate));
	}

	return [...startAdditional, ...dates, ...endAdditional];
};
