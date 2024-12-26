import { useQueryClient } from '@tanstack/react-query';
import { QUERIES } from 'shared/lib';
import { CalendarEvent } from 'entities/CalendarEvent';
import { OptimisticHookProps } from 'shared/model';
import { toSpliced } from 'shared/lib';
import { useCalendaEventApi } from 'entities/CalendarEvent';
import { useMutationRequest } from 'shared/api/request-hooks';

export const useOptimisticCalendarEventMutation = ({ onError, onSuccess }: OptimisticHookProps<CalendarEvent>) => {
	const queryClient = useQueryClient();
	const calendarEventApi = useCalendaEventApi();

	const mutation = useMutationRequest(calendarEventApi.saveEvent, {
		onMutate: async (calendarEvent) => {
			const time = calendarEvent.startTime.dateStartISO();

			await queryClient.cancelQueries({ queryKey: [QUERIES.CALENDAR_EVENTS, time] });

			const prevEventList = queryClient.getQueryData<CalendarEvent[]>([QUERIES.CALENDAR_EVENTS, time]);

			queryClient.setQueryData<CalendarEvent[]>([QUERIES.CALENDAR_EVENTS, time], (old) => {
				if (old) {
					const index = old.findIndex(({ id }) => calendarEvent.id === id);
					if (index > -1) {
						return toSpliced(old, index, 1, calendarEvent);
					}
					return [...old, calendarEvent];
				}
				return [];
			});

			return { prevEventList };
		},
		onError: (error, calendarEvent, context) => {
			console.error(error);
			onError && onError(error, calendarEvent);
			queryClient.setQueryData<CalendarEvent[]>([QUERIES.CALENDAR_EVENTS, calendarEvent.startTime.dateStartISO()], context?.prevEventList);
		},
		onSuccess,
		onSettled: (calendarEvent) => {
			queryClient.invalidateQueries({ queryKey: [QUERIES.CALENDAR_EVENTS, calendarEvent?.startTime.dateStartISO()] });
		},
	});

	return { mutation };
};
