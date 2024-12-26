import { useQueryClient } from '@tanstack/react-query';
import { QUERIES } from 'shared/lib';
import { Calendar, useCalendarApi } from 'entities/Calendar';
import { OptimisticHookProps } from 'shared/model';
import { toSpliced } from 'shared/lib';
import { useMutationRequest } from 'shared/api/request-hooks';

export const useOptimisticCalendarMutation = ({ onError, onSuccess, onMutation }: OptimisticHookProps<Calendar>) => {
	const calendarApi = useCalendarApi();
	const queryClient = useQueryClient();

	const mutation = useMutationRequest(calendarApi.saveCalendar, {
		onMutate: async (calendar) => {
			onMutation && onMutation(calendar);
			await queryClient.cancelQueries({ queryKey: [QUERIES.CALENDARS] });

			const prevCalendarList = queryClient.getQueryData<Calendar[]>([QUERIES.CALENDARS]);

			queryClient.setQueryData([QUERIES.CALENDARS], (old: Calendar[]) => {
				const index = old.findIndex(({ id }) => calendar.id === id);
				if (index > -1) {
					return toSpliced(old, index, 1, calendar);
				} else {
					return [...old, calendar];
				}
			});

			return { prevCalendarList };
		},
		onError: (error, calendar, context) => {
			console.error(error);
			queryClient.setQueryData([QUERIES.CALENDARS], context?.prevCalendarList);
			onError && onError(error, calendar);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: [QUERIES.CALENDARS] });
		},
		onSuccess,
	});

	return { mutation };
};
