import { Calendar } from '../../Calendar';
import { useCallback } from 'react';
import { CalendarDto } from '../model/calendar-types';
import { convertDtoToCalendar, convertCalendarToDto } from '../lib/calendar-model';
import { client } from 'shared/api/axios-client';

const URL = `${import.meta.env.VITE_API_URL}/calendars`;

export const useCalendarApi = () => {
	const getCalendars = useCallback(async (): Promise<Calendar[]> => {
		const res = await client.get<CalendarDto[]>(URL);
		return res.data.map(convertDtoToCalendar);
	}, []);

	const saveCalendar = useCallback(async (calendar: Calendar): Promise<Calendar> => {
		const res = await client.post<CalendarDto>(URL, convertCalendarToDto(calendar));
		return convertDtoToCalendar(res.data);
	}, []);

	const removeCalendar = useCallback(async (calendar: Calendar): Promise<boolean> => {
		if (calendar.isDefault) {
			throw new Error('Default calendar cannot be removed');
		}
		const res = await client.delete(`${URL}/${calendar.id}`);
		return res.status === 200;
	}, []);

	return { removeCalendar, getCalendars, saveCalendar };
};
