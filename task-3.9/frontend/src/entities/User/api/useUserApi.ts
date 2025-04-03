import { useCallback } from 'react';
import { client } from 'shared/api/axios-client';

const URL = `${import.meta.env.VITE_API_URL}/user`;

export const useUserApi = () => {
	// TODO: use rtkQuery
	const checkUserProfile = useCallback(async () => {
		const res = await client.get(`${URL}/check`);
		return [200, 201].includes(res.status);
	}, []);

	return { checkUserProfile };
};
