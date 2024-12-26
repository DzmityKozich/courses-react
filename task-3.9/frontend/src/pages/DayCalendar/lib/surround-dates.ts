import { CalendarDate } from 'entities/CalendarDate';

const DATES_RANGE = 3;

export const getSurroundingDates = (selectedDate: CalendarDate): CalendarDate[] => {
	const dates = [];
	const currentDate = selectedDate.toDate();

	for (let i = -DATES_RANGE; i <= DATES_RANGE; i++) {
		if (i !== 0) {
			const date = new Date(currentDate);
			date.setDate(currentDate.getDate() + i);
			dates.push(new CalendarDate(date));
		}
	}
	return dates;
};
