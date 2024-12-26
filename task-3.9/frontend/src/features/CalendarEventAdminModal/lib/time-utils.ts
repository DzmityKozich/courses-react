import { CalendarDate } from 'entities/CalendarDate';
import { TimeItem } from '../model/TimeItem';
import { DateTimePickerValue } from '../model/DateTimePickerValue';

export const compareTimeItems = (itemA: TimeItem | null, itemB: TimeItem | null): boolean => {
	if (itemA && itemB) {
		return TimeItem.isEqual(itemA, itemB);
	}
	return false;
};

export const toDateTimePickerValue = (value: { date: CalendarDate; startTime: TimeItem; endTime: TimeItem }): DateTimePickerValue => {
	const { date, endTime, startTime } = value;
	const start = new CalendarDate(date.toDate());
	start.hours = startTime.hours;
	start.minutes = startTime.mins;
	const end = new CalendarDate(date.toDate());
	end.hours = endTime.hours;
	end.minutes = endTime.mins;
	return { endTime: end, startTime: start };
};
