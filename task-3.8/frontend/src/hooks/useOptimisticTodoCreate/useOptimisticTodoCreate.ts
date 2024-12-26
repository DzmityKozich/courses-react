import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToDo } from '../../models/enities/ToDo';
import { OptimisticMutateProps } from '../../models/types/OptimisticMudationProps';
import { useApiContext } from '../../context/ApiContext';

export const useOptimisticTodoCreate = ({ onError, onSettled }: OptimisticMutateProps) => {
	const queryClient = useQueryClient();
	const { todoApi } = useApiContext();

	const mutation = useMutation({
		mutationFn: todoApi.create,

		onMutate: async (newTodo) => {
			await queryClient.cancelQueries({ queryKey: ['getAllTodos'] });

			const previousTodos = queryClient.getQueryData<ToDo[]>(['getAllTodos']);

			queryClient.setQueryData(['getAllTodos'], (old: ToDo[]) => {
				return [newTodo, ...old];
			});

			return { previousTodos };
		},
		onError,
		onSettled,
	});

	return mutation;
};
