import React, { useContext, useEffect } from 'react';
import { useApiContext } from '../../context/ApiContext';
import { useQuery } from '@tanstack/react-query';
import { TodoSearch } from '../TodoSearch';
import { Button, ThemeContext, themes } from 'ui-kit';

import './TodoList.scss';

export const TodoList: React.FC = () => {
	const { todoApi } = useApiContext();
	const { data, error, isPending } = useQuery({
		queryKey: ['getAllTodos'],
		queryFn: todoApi.getAll,
	});

	const theme = useContext(ThemeContext);

	useEffect(() => {
		console.log({ theme });
	}, [theme]);

	// if (isPending) {
	// 	return <p>loading...</p>;
	// }

	// if (error) {
	// 	return <p>An error occurred: {error.message}</p>;
	// }

	return (
		<div className="todoListContainer">
			<div className="todoList">
				<div className="todoListHeader">
					<TodoSearch />
					<ThemeContext.Provider value={themes.light}>
						<Button color="primary">Click on ME!</Button>
					</ThemeContext.Provider>
				</div>

				<div className="todoListBody">{/* todo cards here */}</div>
			</div>

			<div className="todoListActions">
				<button>Clear all tasks</button>
			</div>
		</div>
	);
};
