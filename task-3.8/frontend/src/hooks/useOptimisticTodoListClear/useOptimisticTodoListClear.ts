import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToDo } from '../../models/enities/ToDo';
import { TodoApiServiceDef } from '../../models/types/api-service/TodoApiServiceDef';

type Props = {
	todoApi: TodoApiServiceDef;
};

export const useOptimisticTodoListClear = ({ todoApi }: Props) => {
	const queryClisent = useQueryClient();

	const clearTodoList = (todoList: ToDo[]) => {
		const reqs = todoList.map(({ id }) => todoApi.delete(id));
		return Promise.all(reqs);
	};

	const mutation = useMutation({
		mutationFn: clearTodoList,

		onMutate: async (todoList) => {
			await queryClisent.cancelQueries({ queryKey: ['getAllTodos'] });

			const priviousTodoList = queryClisent.getQueryData(['getAllTodos']);

			queryClisent.setQueryData(['getAllTodos'], []);

			return { priviousTodoList };
		},

		onError: (err, todoList, context) => {
			queryClisent.setQueryData(['getAllTodos'], context?.priviousTodoList);
		},

		onSettled: () => {
			queryClisent.invalidateQueries({ queryKey: ['getAllTodos'] });
		},
	});

	return mutation;
};
