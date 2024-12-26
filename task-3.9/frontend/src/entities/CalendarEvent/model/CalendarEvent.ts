import { v4 as uuid } from 'uuid';
import { CalendarDate } from '../../CalendarDate';

export class CalendarEvent {
	public id: string;
	public startTime: CalendarDate;
	public endTime: CalendarDate;

	constructor(
		public calendarId: string,
		startTime: string,
		endTime: string,
		public allDay: boolean,
		public title: string,
		public text: string,
		id?: string
	) {
		if (id) {
			this.id = id;
		} else {
			this.id = uuid();
		}
		this.startTime = new CalendarDate(startTime);
		this.endTime = new CalendarDate(endTime);
	}
}
