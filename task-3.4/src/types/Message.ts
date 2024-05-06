import { Player } from './types';

export class Message {
	public readonly sendAt = Date.now();

	constructor(public sender: Player, public content: string) {}

	public sendDate(): string {
		return new Date(this.sendAt).toISOString();
	}
}
