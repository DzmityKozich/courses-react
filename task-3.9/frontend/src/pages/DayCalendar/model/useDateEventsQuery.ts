import { useQueryClient } from '@tanstack/react-query';
import { QUERIES } from 'shared/lib';
import { CalendarDate } from 'entities/CalendarDate';
import { useCallback, useEffect } from 'react';
import { Calendar } from 'entities/Calendar';
import { getSurroundingDates } from '../lib/surround-dates';
import { useCalendaEventApi } from 'entities/CalendarEvent';
import { useRequest } from 'shared/api/request-hooks';

type Props = {
	selectedDate: CalendarDate;
	calendars: Calendar[];
};

const TIME_TO_LIVE = 3 * 60 * 1000;

export const useDateEventsQuery = ({ selectedDate, calendars }: Props) => {
	const calendarEventApi = useCalendaEventApi();
	const queryClient = useQueryClient();

	const requestEvents = useCallback(
		(date: string) => {
			const ids = calendars.map(({ id }) => id);
			return calendarEventApi.getEventsForDayAndCalendars(ids, date);
		},
		[calendars, calendarEventApi]
	);

	const { data, isError, error, isLoading } = useRequest(() => requestEvents(selectedDate.dateStartISO()), {
		queryKey: [QUERIES.CALENDAR_EVENTS, selectedDate.dateStartISO()],
		staleTime: TIME_TO_LIVE,
		enabled: calendars.length > 0,
	});

	useEffect(() => {
		if (calendars.length) {
			const dates = getSurroundingDates(selectedDate);
			for (const date of dates) {
				queryClient.prefetchQuery({
					queryKey: [QUERIES.CALENDAR_EVENTS, date.dateStartISO()],
					queryFn: () => requestEvents(date.dateStartISO()),
					staleTime: TIME_TO_LIVE,
				});
			}
		}
	}, [selectedDate, requestEvents, calendars, queryClient]);

	return { events: data, actualEvents: data, isError, error, isLoading };
};
