import { Player } from './types';

export class Message {
	public readonly sendAt = Date.now();

	constructor(public sender: Player, public content: string) {}

	public sendDate(): string {
		const hours = new Date(this.sendAt).getHours();
		const minutes = new Date(this.sendAt).getMinutes();
		return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
	}
}
