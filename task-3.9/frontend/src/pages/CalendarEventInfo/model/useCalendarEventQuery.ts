import { QUERIES } from 'shared/lib';
import { AxiosError } from 'axios';
import { CalendarEvent } from 'entities/CalendarEvent';
import { useCalendaEventApi } from 'entities/CalendarEvent';
import { useRequest } from 'shared/api/request-hooks';

type Props = {
	id: string;
};

export const useCalendarEventQuery = ({ id }: Props) => {
	const calendarEventApi = useCalendaEventApi();

	const query = useRequest<CalendarEvent, AxiosError>(() => calendarEventApi.getEventById(id), {
		queryKey: [QUERIES.EVENT, id],
		enabled: !!id,
		retry: 2,
		refetchOnWindowFocus: false,
	});

	return { event: query.data, ...query };
};
