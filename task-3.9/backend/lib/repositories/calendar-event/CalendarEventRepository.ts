import { CalendarEvent } from '../../models/CalendarEvent';

export interface CalendarEventRepository {
	getEventsByCalendarId: (calendarId: string) => Promise<CalendarEvent[]>;
	getEventsForDayAndCalendar: (startDate: string, calendarId: string) => Promise<CalendarEvent[]>;
	getEventsForDayAndCalendars: (startTime: string, calendarIds: string[]) => Promise<CalendarEvent[]>;
	getEventById: (id: string) => Promise<CalendarEvent | undefined>;
	saveEvent: (event: CalendarEvent) => Promise<CalendarEvent>;
	removeEvent: (eventId: string) => Promise<boolean>;
	removeEventsByCalendarId: (calendarId: string) => Promise<boolean>;
}
