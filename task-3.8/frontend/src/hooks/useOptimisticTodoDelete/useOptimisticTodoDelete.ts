import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TodoApiServiceDef } from '../../models/types/api-service/TodoApiServiceDef';
import { ToDo } from '../../models/enities/ToDo';
import { toSpliced } from '../../utils';

type Props = {
	todoApi: TodoApiServiceDef;
};

export const useOptimisticTodoDelete = ({ todoApi }: Props) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: todoApi.delete,
		onMutate: async (id) => {
			await queryClient.cancelQueries({ queryKey: ['getAllTodos'] });

			const previousTodos = queryClient.getQueryData(['getAllTodos']);

			queryClient.setQueryData(['getAllTodos'], (old: ToDo[]) => {
				const index = old.findIndex((todo) => todo.id === id);
				return toSpliced(old, index, 1);
			});

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
