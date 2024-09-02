import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TodoApiServiceDef } from '../../models/types/api-service/TodoApiServiceDef';
import { ToDo } from '../../models/enities/ToDo';

type Props = {
	todoApi: TodoApiServiceDef;
};

export const useOptimisticTodoCreate = ({ todoApi }: Props) => {
	const queryClient = useQueryClient();

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

		// TODO: add error handler
		onError: (err, newTodo, context) => {
			queryClient.setQueryData(['getAllTodos'], context?.previousTodos);
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['getAllTodos'] });
		},
	});

	return mutation;
};
