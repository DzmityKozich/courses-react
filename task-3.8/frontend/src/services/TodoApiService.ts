import { ToDo } from '../models/enities/ToDo';
import { TodoApiServiceDef } from '../models/types/api-service/TodoApiServiceDef';

const url = import.meta.env.VITE_API_URL;

export class TodoApiService implements TodoApiServiceDef {
	constructor() {}

	public getAll = async (): Promise<ToDo[]> => {
		const res = await fetch(`${url}/todo`);
		return await res.json();
	};
}
