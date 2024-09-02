import { ToDo } from '../../enities/ToDo';

export interface TodoApiServiceDef {
	getAll: () => Promise<ToDo[]>;
	// getById: (id: string) => Promise<ToDo | null>;
	// create: (todo: ToDo) => Promise<ToDo>;
	update: (todo: ToDo) => Promise<ToDo | null>;
	delete: (id: string) => Promise<boolean>;
}
