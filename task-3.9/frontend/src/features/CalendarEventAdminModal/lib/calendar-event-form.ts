import { CalendarDate } from 'entities/CalendarDate';
import { CalendarEvent } from 'entities/CalendarEvent';
import { minArray } from './time-array';

export const initCalendarEventForm = (event?: CalendarEvent) => {
	const date = new Date();

	return {
		id: event?.id || '',
		title: event?.title || '',
		text: event?.text || '',
		startTime: event?.startTime || getStartTime(date),
		endTime: event?.endTime || getEndTime(date),
		allDay: !!event?.allDay,
		calendarId: event?.calendarId || '',
	};
};

const getStartTime = (currentDate: Date) => {
	const date = new Date(currentDate);
	if (currentDate.getHours() === 23) {
		date.setHours(23, 0);
	}
	return getNearestCalendarDate(date);
};

const getEndTime = (currentDate: Date) => {
	const date = new Date(currentDate);
	if (date.getHours() === 23) {
		date.setDate(date.getDate() + 1);
		date.setHours(0, 0);
	} else {
		date.setHours(date.getHours() + 1);
	}
	return getNearestCalendarDate(date);
};

const getNearestCalendarDate = (date: Date): CalendarDate => {
	const calendarDate = new CalendarDate(date);
	const minutes = date.getMinutes();
	const diffMap = minArray.map((value) => ({ diff: value - minutes, value })).filter(({ diff }) => diff >= 0);
	if (!diffMap.length) {
		calendarDate.hours += 1;
		calendarDate.minutes = 0;
		return calendarDate;
	}
	const minDiff = Math.min(...diffMap.map(({ diff }) => diff));
	const min = diffMap.find(({ diff }) => diff === minDiff)!.value;
	calendarDate.minutes = min;
	return calendarDate;
};
