import { QUERIES } from 'shared/lib';
import { useCalendarApi } from 'entities/Calendar';
import { useRequest } from 'shared/api/request-hooks';
import { useGetCalendarListQuery } from 'entities/Calendar/api/calendar-api';

export const useCalendarListQuery = () => {
	const calendarApi = useCalendarApi();

	const result = useRequest(calendarApi.getCalendars, {
		queryKey: [QUERIES.CALENDARS],
		refetchOnWindowFocus: false,
	});

	return result;
};

export const useCalendarListRtkQuery = () => {
	const result = useGetCalendarListQuery();

	return result;
};
