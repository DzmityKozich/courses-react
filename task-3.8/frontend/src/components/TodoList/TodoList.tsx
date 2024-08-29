import React from 'react';
import { useApiContext } from '../../context/ApiContext';
import { useQuery } from '@tanstack/react-query';
import { TodoSearch } from '../TodoSearch';
import { Button } from 'ui-kit';
import { TodoCard } from '../TodoCard';

import './TodoList.scss';

export const TodoList: React.FC = () => {
	const { todoApi } = useApiContext();
	const { data, error, isPending } = useQuery({
		queryKey: ['getAllTodos'],
		queryFn: todoApi.getAll,
	});

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
						<TodoCard key={todo.id} todo={todo} />
					))}
				</div>
			</div>

			<div className="todoListActions">
				<Button color="secondary">Clear all tasks</Button>
			</div>
		</div>
	);
};
