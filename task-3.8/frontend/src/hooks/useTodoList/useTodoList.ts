import { useQuery } from '@tanstack/react-query';
import { useApiContext } from '../../context/ApiContext';

export const useTodoListQuery = () => {
	const { todoApi } = useApiContext();

	const queryResult = useQuery({
		queryKey: ['getAllTodos'],
		queryFn: todoApi.getAll,
	});

	return queryResult;
};
