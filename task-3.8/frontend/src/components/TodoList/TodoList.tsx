import React, { useEffect } from 'react';
import { useApiContext } from '../../context/ApiContext';
import { useQuery } from '@tanstack/react-query';
import { TodoApiService } from '../../services/TodoApiService';

// const api = new TodoApiService();

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

	return <></>;
};
