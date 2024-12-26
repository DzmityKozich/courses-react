import { Calendar } from 'entities/Calendar/model/Calendar';
import { CalendarEvent } from 'entities/CalendarEvent';

export const filterActiveCalendaEvents = (events: CalendarEvent[], calendars: Calendar[]): CalendarEvent[] => {
	const activeCalendars = calendars.filter(({ isActive }) => isActive).map(({ id }) => id);
	return events.filter(({ calendarId }) => activeCalendars.includes(calendarId));
};
