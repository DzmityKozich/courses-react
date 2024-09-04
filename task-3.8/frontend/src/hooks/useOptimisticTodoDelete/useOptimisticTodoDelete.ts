import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TodoApiServiceDef } from '../../models/types/api-service/TodoApiServiceDef';
import { ToDo } from '../../models/enities/ToDo';
import { toSpliced } from '../../utils';

type Props = {
	todoApi: TodoApiServiceDef;
	triggerToast: (message: string) => void;
};

export const useOptimisticTodoDelete = ({ todoApi, triggerToast }: Props) => {
	const queryClient = useQueryClient();

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

		onError: (err, _, context) => {
			triggerToast(`Something went wrong: ${err}`);
			queryClient.setQueryData(['getAllTodos'], context?.previousTodos);
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['getAllTodos'] });
		},
	});

	return mutation;
};
