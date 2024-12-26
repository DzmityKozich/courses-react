import { auth } from 'shared/auth';
import axios from 'axios';

const client = axios.create();

client.interceptors.request.use(async (config) => {
	const token = await auth.currentUser?.getIdToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

client.interceptors.response.use(
	(responce) => responce,
	async (error) => {
		const originalRequest = error.config;
		if (!auth?.currentUser) {
			return Promise.reject(error);
		}
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				await auth.currentUser.getIdToken(true);
				return client(originalRequest);
			} catch (refreshError) {
				console.error('Token refresh failed:', refreshError);
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);

export { client };
