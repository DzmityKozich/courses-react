import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToDo } from '../../models/enities/ToDo';
import { toSpliced } from '../../utils';
import { OptimisticMutateProps } from '../../models/types/OptimisticMudationProps';
import { useApiContext } from '../../context/ApiContext';

export const useOptimisticTodoUpdate = ({ onError, onSettled }: OptimisticMutateProps) => {
	const queryClient = useQueryClient();
	const { todoApi } = useApiContext();

	const mutation = useMutation({
		mutationFn: todoApi.update,
		onMutate: async (updatedTodo) => {
			await queryClient.cancelQueries({ queryKey: ['getAllTodos'] });

			const previousTodos = queryClient.getQueryData(['getAllTodos']);

			queryClient.setQueryData(['getAllTodos'], (old: ToDo[]) => {
				const index = old.findIndex(({ id }) => id === updatedTodo.id);
				return toSpliced(old, index, 1, updatedTodo);
			});

			return { previousTodos };
		},
		onError,
		onSettled,
	});

	return mutation;
};
