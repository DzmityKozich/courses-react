import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type RequestOptions<TQueryFnData, TError, TData> = Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryFn'>;

export const useRequest = <TQueryFnData, TError, TData = TQueryFnData>(
	reqFn: () => Promise<TQueryFnData>,
	options: RequestOptions<TQueryFnData, TError, TData>
) => {
	const navigate = useNavigate();

	const query = useQuery<TQueryFnData, TError, TData>({
		queryFn: reqFn,
		...options,
	});

	useEffect(() => {
		if (query.error instanceof AxiosError) {
			if (query.error.status === 401) {
				navigate('/login');
			}
		}
	}, [query.error]);

	return query;
};
