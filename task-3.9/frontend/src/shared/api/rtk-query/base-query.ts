import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { auth } from '../../auth';

const prepareHeaders = async (headers: Headers) => {
	const token = await auth.currentUser?.getIdToken();
	if (token) {
		headers.set('Authorization', `Bearer ${token}`);
	}
	return headers;
};

export const baseQueryFactory = (baseUrl: string) =>
	fetchBaseQuery({
		baseUrl,
		prepareHeaders,
	});

export const baseQueryWithReauthFactory =
	(baseUrl: string): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =>
	async (args, store, extraOptions) => {
		const result = await baseQueryFactory(baseUrl)(args, store, extraOptions);

		// FIXME: complete the logic!!!
		if (result.error?.status === 401) {
			console.error('unauthorized, logging out...');
		}

		return result;
	};
