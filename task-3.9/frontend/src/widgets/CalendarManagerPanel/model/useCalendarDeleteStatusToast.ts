import { OptimisticHookProps } from 'shared/model';
import { useCallback } from 'react';
import { useToastContext } from 'shared/ui-kit';
import { Calendar } from 'entities/Calendar';
import { AxiosError } from 'axios';

export const useCalendarDeleteStatusToast = (): OptimisticHookProps<Calendar, boolean> => {
	const { showToast } = useToastContext();

	const onError = useCallback(
		(err: Error | AxiosError, _: Calendar) => {
			if (err instanceof AxiosError) {
				showToast(`Error calendar removing`);
			} else {
				showToast(err.message);
			}
		},
		[showToast]
	);

	const onSuccess = useCallback(
		(_: boolean) => {
			showToast(`Calendar removed successfully`);
		},
		[showToast]
	);

	const onMutation = useCallback(
		(_: Calendar) => {
			showToast(`Calendar is being deleted`);
		},
		[showToast]
	);

	return { onError, onSuccess, onMutation };
};
