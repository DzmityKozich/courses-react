import { DatepickerDate } from './DatepikerDate';

export const getYearList = (firstYear: number, lastYear: number): number[] => {
	return [...new Array(lastYear - firstYear).fill(0).map((_, i) => firstYear + i), lastYear];
};

export const isLastAvailableMonth = (year: number, lastYear: number, month: number): boolean => {
	return year === lastYear && month === 11;
};

export const isFirstAvailableMonth = (year: number, firstYear: number, month: number): boolean => {
	return year === firstYear && month === 0;
};

export const getMonthData = (year: number, month: number): DatepickerDate[][] => {
	const daysInMonth = getDaysInMonth(year, month);
	const fullDates = addMissingDates(daysInMonth);
	const dates = fullDates.map((date) => new DatepickerDate(date));
	return splitByWeeks(dates);
};

export const getDaysInMonth = (year: number, month: number): Date[] => {
	let date = new Date(year, month, 1);
	const days: Date[] = [];

	while (date.getMonth() === month) {
		days.push(new Date(date));
		date.setDate(date.getDate() + 1);
	}

	return days;
};

export const splitByWeeks = (dates: DatepickerDate[]): DatepickerDate[][] => {
	return dates.reduce((weeks, date) => {
		let lastWeek = weeks.at(-1);
		if (date.dayOfWeek === 1 || !lastWeek) {
			weeks.push([date]);
		} else {
			lastWeek.push(date);
		}
		return weeks;
	}, [] as DatepickerDate[][]);
};

export const addMissingDates = (dates: Date[]): Date[] => {
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
