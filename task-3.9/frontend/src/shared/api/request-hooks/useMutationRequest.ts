import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

type RequestMutationOptions<TData = unknown, TError = Error, TVariables = void, TContext = unknown> = Omit<
	UseMutationOptions<TData, TError, TVariables, TContext>,
	'mutationFn'
>;

export const useMutationRequest = <TData = unknown, TError = Error, TContext = unknown, TVariables = unknown>(
	reqFn: (variables: TVariables) => Promise<TData>,
	options: RequestMutationOptions<TData, TError, TVariables, TContext>
) => {
	const navigate = useNavigate();

	const mutate = useMutation<TData, TError, TVariables, TContext>({
		mutationFn: reqFn,
		...options,
		onError: (error, variables, context) => {
			options?.onError?.(error, variables, context);
			if (error instanceof AxiosError) {
				if (error.status === 401) {
					navigate('/login');
				}
			}
		},
	});

	return mutate;
};
