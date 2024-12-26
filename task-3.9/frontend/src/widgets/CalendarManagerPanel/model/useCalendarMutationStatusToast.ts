import { Calendar } from 'entities/Calendar';
import { OptimisticHookProps } from 'shared/model';
import { useCallback } from 'react';
import { useToastContext } from 'shared/ui-kit';

export const useCalendarMutationStatusToast = (): OptimisticHookProps<Calendar> => {
	const { showToast } = useToastContext();

	const onError = useCallback(
		(_: Error, calendar: Calendar) => {
			showToast(`Error saving calendar ${calendar.title}`);
		},
		[showToast]
	);

	const onMutation = useCallback(
		(calendar: Calendar) => {
			showToast(`${calendar.title} is being saved`);
		},
		[showToast]
	);

	const onSuccess = useCallback(
		(calendar: Calendar) => {
			showToast(`${calendar.title} saved successfully`);
		},
		[showToast]
	);

	return { onError, onMutation, onSuccess };
};
