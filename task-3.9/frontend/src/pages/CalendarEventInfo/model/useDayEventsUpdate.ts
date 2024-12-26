import { useQueryClient } from '@tanstack/react-query';
import { QUERIES } from 'shared/lib';
import { CalendarEvent } from 'entities/CalendarEvent';
import { useCallback } from 'react';
import { toSpliced } from 'shared/lib';

export const useDayEventsUpdate = () => {
	const queryClient = useQueryClient();

	const updateDayEvents = useCallback(
		async (event: CalendarEvent) => {
			queryClient.setQueryData<CalendarEvent[]>([QUERIES, event.startTime.dateStartISO()], (old) => {
				if (old) {
					const index = old.findIndex(({ id }) => id === event.id);
					if (index > -1) {
						return toSpliced(old, index, 1);
					}
				}
				return [];
			});

			await queryClient.invalidateQueries({ queryKey: [QUERIES.CALENDAR_EVENTS, event.startTime.dateStartISO()] });
		},
		[queryClient]
	);

	return { updateDayEvents };
};
