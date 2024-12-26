import { useQueryClient } from '@tanstack/react-query';
import { QUERIES } from 'shared/lib';
import { CalendarEvent } from 'entities/CalendarEvent';
import { OptimisticHookProps } from 'shared/model';
import { toSpliced } from 'shared/lib';
import { useCalendaEventApi } from 'entities/CalendarEvent';
import { useMutationRequest } from 'shared/api/request-hooks';

export const useOptimisticCalendaEventDelete = ({ onError, onSuccess }: OptimisticHookProps<CalendarEvent, boolean>) => {
	const queryClient = useQueryClient();
	const calendarEventApi = useCalendaEventApi();

	const mutation = useMutationRequest(calendarEventApi.removeEvent, {
		onMutate: async (event) => {
			const time = event.startTime.dateStartISO();

			await queryClient.cancelQueries({ queryKey: [QUERIES.CALENDAR_EVENTS, time] });

			const prevEventList = queryClient.getQueryData<CalendarEvent[]>([QUERIES.CALENDAR_EVENTS, time]);

			queryClient.setQueryData<CalendarEvent[]>([QUERIES.CALENDAR_EVENTS, time], (old) => {
				if (old) {
					const index = old.findIndex(({ id }) => id === event.id);
					if (index > -1) {
						return toSpliced(old, index, 1);
					}
				}
				return [];
			});

			return { prevEventList };
		},
		onError: (error, event, context) => {
			console.error(error);
			onError && onError(error, event);
			queryClient.setQueryData<CalendarEvent[]>([QUERIES.CALENDAR_EVENTS, event.startTime.dateStartISO()], context?.prevEventList);
		},
		onSuccess,
		onSettled: (_, __, event) => {
			queryClient.invalidateQueries({ queryKey: [QUERIES.CALENDAR_EVENTS, event.startTime.dateStartISO()] });
		},
	});

	return { mutation };
};
