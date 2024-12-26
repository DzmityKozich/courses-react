import { Timestamp } from 'firebase-admin/firestore';

export interface CalendarEventDto {
	id: string;
	calendarId: string;
	startTime: Timestamp;
	endTime: Timestamp;
	title: string;
	text: string;
	allDay: boolean;
}
