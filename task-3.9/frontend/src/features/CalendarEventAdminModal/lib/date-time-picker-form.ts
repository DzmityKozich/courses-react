import { CalendarDate } from 'entities/CalendarDate';
import { TimeItem } from '../model/TimeItem';

export const initDateTimeForm = (startTime?: CalendarDate, endTime?: CalendarDate) => {
	const currentDate = new Date();
	const date = startTime || new CalendarDate(currentDate);
	const start = new TimeItem(startTime || currentDate);
	let end = new TimeItem(endTime || currentDate);
	if (startTime && endTime) {
		if (!startTime.isSameDate(endTime)) {
			const startOfDay = new Date(startTime.year, startTime.monthIndex, startTime.date);
			end = TimeItem.createRelativeTo(endTime, startOfDay);
		}
	}
	return { date, startTime: start, endTime: end };
};
