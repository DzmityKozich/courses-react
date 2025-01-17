import { v4 as uuid } from 'uuid';

export class Calendar {
	public id: string;
	private _isDefault: boolean;

	constructor(public title: string, public color: string, public isActive: boolean, isDefault: boolean, id?: string) {
		this._isDefault = isDefault;
		if (id) {
			this.id = id;
		} else {
			this.id = uuid();
		}
	}

	get isDefault() {
		return this._isDefault;
	}
}
