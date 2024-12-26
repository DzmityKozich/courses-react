import { v4 as uuid } from 'uuid';

export class ToDo {
	public id: string;

	constructor(public title: string, public text: string, public createdAt: number, public isComplete: boolean, id?: string) {
		if (!id) {
			this.id = uuid();
		} else {
			this.id = id;
		}
	}
}
