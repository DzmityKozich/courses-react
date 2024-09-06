import { ToDo } from '../models/enities/ToDo';
import { TodoApiServiceDef } from '../models/types/api-service/TodoApiServiceDef';

const url = import.meta.env.VITE_API_URL;

const sendRequest = async <T>(request: Promise<Response>): Promise<{ res: Response; result: T }> => {
	const res = await request;
	const result = await res.json();
	if (res.status < 200 || res.status > 299) {
		throw new Error(result.message);
	}
	return { res, result };
};

export class TodoApiService implements TodoApiServiceDef {
	constructor() {}

	public getAll = async (): Promise<ToDo[]> => {
		const res = await fetch(`${url}/todo`);
		return await res.json();
	};

	public update = async (todo: ToDo): Promise<ToDo | null> => {
		const { result } = await sendRequest<ToDo | null>(
			fetch(`${url}/todo/update`, {
				body: JSON.stringify(todo),
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			})
		);
		return result;
	};

	public delete = async (id: string): Promise<boolean> => {
		const { res } = await sendRequest<boolean>(
			fetch(`${url}/todo/${id}`, {
				method: 'DELETE',
			})
		);
		return res.status === 204;
	};

	public create = async (todo: ToDo): Promise<ToDo> => {
		const { result } = await sendRequest<ToDo>(
			fetch(`${url}/todo`, {
				body: JSON.stringify(todo),
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			})
		);
		return result;
	};
}
