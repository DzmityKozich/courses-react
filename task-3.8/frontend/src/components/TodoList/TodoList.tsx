import React from 'react';
import { useApiContext } from '../../context/ApiContext';
import { useQuery } from '@tanstack/react-query';
import { TodoSearch } from '../TodoSearch';
import { Button, DeleteIcon } from 'ui-kit';
import { TodoCard } from '../TodoCard';
import { ToDo } from '../../models/enities/ToDo';
import { useOptimisticTodoUpdate } from '../../hooks/useOptimisticTodoUpdate/useOptimisticTodoUpdate';

import './TodoList.scss';

export const TodoList: React.FC = () => {
	const { todoApi } = useApiContext();
	const { mutate: mutateTodo } = useOptimisticTodoUpdate({ todoApi });

	const { data, error, isPending } = useQuery({
		queryKey: ['getAllTodos'],
		queryFn: todoApi.getAll,
	});

	const updateTodo = (todo: ToDo) => {
		mutateTodo(todo);
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
						<TodoCard key={todo.id} todo={todo} onTodoUpdate={(todo) => updateTodo(todo)} />
					))}
				</div>
			</div>

			<div className="todoListActions">
				{/* FIXME: Css classes issue!!! */}
				<Button color="secondary" startIcon={<DeleteIcon color="inherit" />}>
					Clear all tasks
				</Button>
			</div>
		</div>
	);
};
