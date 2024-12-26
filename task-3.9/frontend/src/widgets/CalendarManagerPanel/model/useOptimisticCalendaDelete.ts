import { useQueryClient } from '@tanstack/react-query';
import { QUERIES } from 'shared/lib';
import { Calendar, useCalendarApi } from 'entities/Calendar';
import { CalendarEvent } from 'entities/CalendarEvent';
import { OptimisticHookProps } from 'shared/model';
import { toSpliced } from 'shared/lib';
import { useMutationRequest } from 'shared/api/request-hooks';

export const useOptimisticCalendarDelete = ({ onError, onSuccess, onMutation }: OptimisticHookProps<Calendar, boolean>) => {
	const queryClient = useQueryClient();
	const calendarApi = useCalendarApi();

	const mutation = useMutationRequest(calendarApi.removeCalendar, {
		onMutate: async (calendar) => {
			onMutation && onMutation(calendar);
			await queryClient.cancelQueries({ queryKey: [QUERIES.CALENDARS] });
			await queryClient.cancelQueries({ queryKey: [QUERIES.CALENDAR_EVENTS] });

			const prevCalendarList = queryClient.getQueryData<Calendar[]>([QUERIES.CALENDARS]);
			const prevEventList = queryClient.getQueriesData<CalendarEvent[]>({ queryKey: [QUERIES.CALENDAR_EVENTS] });

			queryClient.setQueryData([QUERIES.CALENDARS], (old: Calendar[]) => {
				const index = old.findIndex(({ id }) => id === calendar.id);
				return toSpliced(old, index, 1);
			});

			queryClient.setQueriesData<CalendarEvent[]>({ queryKey: [QUERIES.CALENDAR_EVENTS] }, (queryData) => {
				return queryData?.filter((event) => event.calendarId !== calendar.id);
			});

			return { prevCalendarList, prevEventList };
		},
		onError: (error, calendar, context) => {
			console.error(error);
			queryClient.setQueryData([QUERIES.CALENDARS], context?.prevCalendarList);
			context?.prevEventList.forEach(([queryKey, events]) => queryClient.setQueryData<CalendarEvent[]>([...queryKey], events));
			onError && onError(error, calendar);
		},
		onSettled: async () => {
			await queryClient.invalidateQueries({ queryKey: [QUERIES.CALENDARS] });
			await queryClient.invalidateQueries({ queryKey: [QUERIES.CALENDAR_EVENTS] });
		},
		onSuccess,
	});

	return { mutation };
};
