import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useContext } from 'react';
import { ToastContext } from '../../context/ToastContext';

export const useTodoMutateHandlers = () => {
	const queryClient = useQueryClient();
	const { toastTrigger } = useContext(ToastContext);

	const onError = useCallback((err: Error, _: any, context: any) => {
		toastTrigger.showToast(`Something went wrong: ${err}`);
		queryClient.setQueryData(['getAllTodos'], context?.previousTodos);
	}, []);

	const onSettled = useCallback(() => {
		queryClient.invalidateQueries({ queryKey: ['getAllTodos'] });
	}, []);

	return { onError, onSettled };
};
