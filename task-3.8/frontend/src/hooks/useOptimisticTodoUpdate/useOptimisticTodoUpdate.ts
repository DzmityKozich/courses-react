import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TodoApiServiceDef } from '../../models/types/api-service/TodoApiServiceDef';
import { ToDo } from '../../models/enities/ToDo';
import { toSpliced } from '../../utils';

type Props = {
	todoApi: TodoApiServiceDef;
};

export const useOptimisticTodoUpdate = ({ todoApi }: Props) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: todoApi.update,
		onMutate: async (newTodo) => {
			// Cancel any outgoing refetches
			// (so they don't overwrite our optimistic update)
			await queryClient.cancelQueries({ queryKey: ['getAllTodos'] });

			// Snapshot the previous value
			const previousTodos = queryClient.getQueryData(['getAllTodos']);

			// Optimistically update to the new value
			queryClient.setQueryData(['getAllTodos'], (old: ToDo[]) => {
				const index = old.findIndex(({ id }) => id === newTodo.id);
				return toSpliced(old, index, 1, newTodo);
			});

			// Return a context with the previous and new todo
			return { previousTodos };
		},

		// TODO: implement error handling
		onError: (err, newTodo, context) => {
			queryClient.setQueryData(['getAllTodos'], context?.previousTodos);
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['getAllTodos'] });
		},
	});

	return mutation;
};
