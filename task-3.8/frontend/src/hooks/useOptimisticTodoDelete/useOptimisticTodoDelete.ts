import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToDo } from '../../models/enities/ToDo';
import { toSpliced } from '../../utils';
import { OptimisticMutateProps } from '../../models/types/OptimisticMudationProps';
import { useApiContext } from '../../context/ApiContext';

export const useOptimisticTodoDelete = ({ onError, onSettled }: OptimisticMutateProps) => {
	const queryClient = useQueryClient();
	const { todoApi } = useApiContext();

	const mutation = useMutation({
		mutationFn: todoApi.delete,
		onMutate: async (id) => {
			await queryClient.cancelQueries({ queryKey: ['getAllTodos'] });

			const previousTodos = queryClient.getQueryData<ToDo[]>(['getAllTodos']);

			queryClient.setQueryData(['getAllTodos'], (old: ToDo[]) => {
				const index = old.findIndex((todo) => todo.id === id);
				return toSpliced(old, index, 1);
			});

			return { previousTodos };
		},
		onError,
		onSettled,
	});

	return mutation;
};
