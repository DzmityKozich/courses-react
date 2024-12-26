import { CalendarEvent, CalendarEventDto } from '../../../models/CalendarEvent';
import { FirebaseConvertor } from './types';
import { Timestamp } from 'firebase-admin/firestore';

export const calendarEventConvertor: FirebaseConvertor<CalendarEvent, CalendarEventDto> = {
	fromFirestore: (snapshot) => {
		const { endTime: end, id, startTime: start, text, title, calendarId, allDay } = snapshot.data();
		const startTime = new Timestamp(start.seconds, start.nanoseconds).toDate().toISOString();
		const endTime = new Timestamp(end.seconds, end.nanoseconds).toDate().toISOString();
		return new CalendarEvent(id, calendarId, startTime, endTime, allDay, title, text);
	},
	toFirestore: (value) => {
		const { endTime, startTime, ...rest } = value;
		const startTs = Timestamp.fromDate(roundDownTime(startTime));
		const endTs = Timestamp.fromDate(roundDownTime(endTime));
		return { ...rest, endTime: endTs, startTime: startTs };
	},
};

const roundDownTime = (dateStr: string): Date => {
	const date = new Date(dateStr);
	date.setSeconds(0, 0);
	return date;
};
