import { CalendarEvent } from 'entities/CalendarEvent';
import { useCallback } from 'react';
import { client } from 'shared/api/axios-client';

interface CalendarEventDto {
	calendarId: string;
	endTime: string;
	id: string;
	startTime: string;
	text: string;
	title: string;
	allDay: boolean;
}

const URL = `${import.meta.env.VITE_API_URL}/calendar-events`;

function toCalendarEvent(calendarEventDto: CalendarEventDto): CalendarEvent {
	const { calendarId, endTime, id, startTime, text, title, allDay } = calendarEventDto;
	return new CalendarEvent(calendarId, startTime, endTime, allDay, title, text, id);
}

function toCalendarEventDto(calendarEvent: CalendarEvent): CalendarEventDto {
	const { allDay, calendarId, endTime, id, startTime, text, title } = calendarEvent;
	return { id, allDay, calendarId, text, title, startTime: startTime.toISOString(), endTime: endTime.toISOString() };
}

export const useCalendaEventApi = () => {
	const getEventsByCalendarId = useCallback(async (calendarId: string): Promise<CalendarEvent[]> => {
		const res = await client.get<CalendarEventDto[]>(`${URL}/calendar/${calendarId}`);
		return res.data.map((event) => toCalendarEvent(event));
	}, []);

	const getEventsForDayAndCalendar = useCallback(async (calendarId: string, date: string): Promise<CalendarEvent[]> => {
		const res = await client.get<CalendarEventDto[]>(`${URL}/calendar/${calendarId}/date/${date}`);
		return res.data.map((event) => toCalendarEvent(event));
	}, []);

	const getEventsForDayAndCalendars = useCallback(async (calendarIds: string[], date: string): Promise<CalendarEvent[]> => {
		const res = await client.post<CalendarEventDto[]>(`${URL}/calendars/date/${date}`, { calendarIds });
		return res.data.map((event) => toCalendarEvent(event));
	}, []);

	const saveEvent = useCallback(async (event: CalendarEvent): Promise<CalendarEvent> => {
		const res = await client.post<CalendarEventDto>(URL, toCalendarEventDto(event));
		return toCalendarEvent(res.data);
	}, []);

	const getEventById = useCallback(async (id: string): Promise<CalendarEvent> => {
		const res = await client.get<CalendarEventDto>(`${URL}/${id}`);
		return toCalendarEvent(res.data);
	}, []);

	const removeEvent = useCallback(async (event: CalendarEvent): Promise<boolean> => {
		const res = await client.delete<boolean>(`${URL}/${event.id}`);
		return res.data;
	}, []);

	return { getEventById, getEventsByCalendarId, getEventsForDayAndCalendar, saveEvent, getEventsForDayAndCalendars, removeEvent };
};
