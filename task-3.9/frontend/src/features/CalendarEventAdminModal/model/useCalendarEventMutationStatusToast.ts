import { CalendarEvent } from 'entities/CalendarEvent';
import { OptimisticHookProps } from 'shared/model';
import { useCallback } from 'react';
import { useToastContext } from 'shared/ui-kit';

export const useCalendarEventMutationStatusToast = (): OptimisticHookProps<CalendarEvent> => {
	const { showToast } = useToastContext();

	const onError = useCallback(() => {
		showToast('Event event saving');
	}, [showToast]);

	const onSuccess = useCallback(() => {
		showToast('Event successfully saved');
	}, [showToast]);

	const onMutation = useCallback(() => {
		showToast('Event is being saved');
	}, [showToast]);

	return { onError, onMutation, onSuccess };
};
