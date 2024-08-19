import React, { useEffect } from 'react';
import { useApiContext } from '../../context/ApiContext';
import { useQuery } from '@tanstack/react-query';
import { TodoSearch } from '../TodoSearch';

import './TodoList.scss';

export const TodoList: React.FC = () => {
	const { todoApi } = useApiContext();
	const { data, error, isPending } = useQuery({
		queryKey: ['getAllTodos'],
		queryFn: todoApi.getAll,
	});

	useEffect(() => {
		console.log({ data });
	}, [data]);

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

				<div className="todoListBody">{/* todo cards here */}</div>
			</div>

			<div className="todoListActions">
				<button>Clear all tasks</button>
			</div>
		</div>
	);
};
