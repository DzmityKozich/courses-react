import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToDo } from '../../models/enities/ToDo';
import { OptimisticMutateProps } from '../../models/types/OptimisticMudationProps';
import { useApiContext } from '../../context/ApiContext';

export const useOptimisticTodoListClear = ({ onError, onSettled }: OptimisticMutateProps) => {
	const queryClient = useQueryClient();
	const { todoApi } = useApiContext();

	const clearTodoList = (todoList: ToDo[]) => {
		const reqs = todoList.map(({ id }) => todoApi.delete(id));
		return Promise.all(reqs);
	};

	const mutation = useMutation({
		mutationFn: clearTodoList,

		onMutate: async () => {
			await queryClient.cancelQueries({ queryKey: ['getAllTodos'] });

			const previousTodos = queryClient.getQueryData(['getAllTodos']);

			queryClient.setQueryData(['getAllTodos'], []);

			return { previousTodos };
		},
		onError,
		onSettled,
	});

	return mutation;
};
