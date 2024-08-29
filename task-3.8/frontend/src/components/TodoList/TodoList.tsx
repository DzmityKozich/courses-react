import React, { useEffect } from 'react';
import { useApiContext } from '../../context/ApiContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TodoSearch } from '../TodoSearch';
import { Button, CloseIcon } from 'ui-kit';
import { TodoCard } from '../TodoCard';
import { ToDo } from '../../models/enities/ToDo';

import './TodoList.scss';

export const TodoList: React.FC = () => {
	const { todoApi } = useApiContext();
	const queryClient = useQueryClient();
	const { data, error, isPending } = useQuery({
		queryKey: ['getAllTodos'],
		queryFn: todoApi.getAll,
	});

	const { mutate } = useMutation({
		mutationFn: todoApi.update,
		onMutate: async (newTodo) => {
			// Cancel any outgoing refetches
			// (so they don't overwrite our optimistic update)
			await queryClient.cancelQueries({ queryKey: ['getAllTodos', newTodo.id] });

			// Snapshot the previous value
			const previousTodo = queryClient.getQueryData(['getAllTodos', newTodo.id]);

			// Optimistically update to the new value
			queryClient.setQueryData(['getAllTodos', newTodo.id], newTodo);

			// Return a context with the previous and new todo
			return { previousTodo, newTodo };
		},
		// If the mutation fails, use the context we returned above
		onError: (err, newTodo, context) => {
			queryClient.setQueryData(['getAllTodos', context?.newTodo.id], context?.previousTodo);
		},
		// Always refetch after error or success:
		onSettled: (newTodo) => {
			queryClient.invalidateQueries({ queryKey: ['getAllTodos', newTodo?.id] });
		},
	});

	const updateTodo = (todo: ToDo) => {
		mutate(todo);
	};

	if (isPending) {
		return <p>loading...</p>;
	}

	if (error) {
		return <p>An error occurred: {error.message}</p>;
	}

	return (
		<div className="todoListContainer">
			<div className="todoList">
				<div className="todoListHeader">
					<TodoSearch />
				</div>

				<div className="todoListBody">
					{data.map((todo) => (
						<TodoCard key={todo.id} todo={todo} onCompleteToggle={(isComplete) => updateTodo({ ...todo, isComplete })} />
					))}
				</div>
			</div>

			<div className="todoListActions">
				{/* FIXME: Css classes issue!!! */}
				<Button color="secondary" startIcon={<CloseIcon color="red" />}>
					Clear all tasks
				</Button>
			</div>
		</div>
	);
};
