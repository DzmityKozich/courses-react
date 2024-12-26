export class CalendarEvent {
	constructor(
		public id: string,
		public calendarId: string,
		public startTime: string,
		public endTime: string,
		public allDay: boolean,
		public title: string,
		public text: string
	) {}
}
