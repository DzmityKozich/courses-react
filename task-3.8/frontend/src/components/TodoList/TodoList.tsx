import React, { useCallback, useMemo } from 'react';
import { useApiContext } from '../../context/ApiContext';
import { useQuery } from '@tanstack/react-query';
import { AddTodoForm } from '../TodoSearch';
import { Button, DeleteIcon } from 'ui-kit';
import { TodoCard } from '../TodoCard';
import { ToDo } from '../../models/enities/ToDo';
import { useOptimisticTodoDelete, useOptimisticTodoUpdate } from '../../hooks';
import { useOptimisticTodoCreate } from '../../hooks/useOptimisticTodoCreate';

import './TodoList.scss';

export const TodoList: React.FC = () => {
	const { todoApi } = useApiContext();
	const { mutate: mutateTodo } = useOptimisticTodoUpdate({ todoApi });
	const { mutate: removeTodo } = useOptimisticTodoDelete({ todoApi });
	const { mutate: createTodo } = useOptimisticTodoCreate({ todoApi });

	const { data, error, isPending } = useQuery({
		queryKey: ['getAllTodos'],
		queryFn: todoApi.getAll,
	});

	const todoList = useMemo(() => {
		if (!data) return [];
		return [...data].sort((todoA, todoB) => todoB.createdAt - todoA.createdAt);
	}, [data]);

	const updateTodo = useCallback(
		(todo: ToDo) => {
			mutateTodo(todo);
		},
		[mutateTodo]
	);

	const deleteTodo = useCallback(
		(todo: ToDo) => {
			removeTodo(todo.id);
		},
		[removeTodo]
	);

	const addTodo = useCallback(
		(text: string) => {
			const todo = new ToDo('', text, Date.now(), false);
			console.log({ todo });
			createTodo(todo);
		},
		[createTodo]
	);

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
					<AddTodoForm onFormSubmit={addTodo} />
				</div>

				<div className="todoListBody">
					{todoList.map((todo) => (
						<TodoCard key={todo.id} todo={todo} onTodoUpdate={updateTodo} onTodoRemove={deleteTodo} />
					))}
				</div>
			</div>

			<div className="todoListActions flex justify-center">
				<Button color="secondary" startIcon={<DeleteIcon color="inherit" />}>
					Clear all tasks
				</Button>
			</div>
		</div>
	);
};
