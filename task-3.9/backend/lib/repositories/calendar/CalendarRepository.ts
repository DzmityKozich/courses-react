import { Calendar } from '../../models/Calendar';

export interface CalendaRepository {
	getCalendarById: (calendarId: string) => Promise<Calendar | null>;
	getCalendars: (userId: string) => Promise<Calendar[]>;
	saveCalendar: (calendar: Calendar) => Promise<Calendar>;
	removeCalendar: (calendarId: string) => Promise<boolean>;
}
