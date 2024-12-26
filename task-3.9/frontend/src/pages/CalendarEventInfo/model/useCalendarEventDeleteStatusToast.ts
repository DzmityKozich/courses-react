import { CalendarEvent } from 'entities/CalendarEvent';
import { OptimisticHookProps } from 'shared/model';
import { useCallback } from 'react';
import { useToastContext } from 'shared/ui-kit';

export const useCalendarEventDeleteStatusToast = (): OptimisticHookProps<CalendarEvent, boolean> => {
	const { showToast } = useToastContext();

	const onError = useCallback(
		(_: Error, __: CalendarEvent) => {
			showToast('Error deleting event');
		},
		[showToast]
	);

	const onSuccess = useCallback(() => {
		showToast('Event successfully deleted');
	}, [showToast]);

	const onMutation = useCallback(() => {
		showToast('Event is being deleted');
	}, [showToast]);

	return { onError, onSuccess, onMutation };
};
