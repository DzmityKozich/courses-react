import { QUERIES } from 'shared/lib';
import { useCalendarApi } from 'entities/Calendar';
import { useRequest } from 'shared/api/request-hooks';

export const useCalendarListQuery = () => {
	const calendarApi = useCalendarApi();

	const result = useRequest(calendarApi.getCalendars, {
		queryKey: [QUERIES.CALENDARS],
		refetchOnWindowFocus: false,
	});

	return result;
};
