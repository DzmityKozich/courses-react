import dateFormat from 'dateformat';
import { CalendarDate } from 'entities/CalendarDate';

export class TimeItem {
	public hours: number;
	public mins: number;

	constructor(date: Date | CalendarDate);
	constructor(hours: number, mins: number);

	constructor(arg1: Date | CalendarDate | number, arg2?: number) {
		if (arg1 instanceof Date) {
			this.hours = arg1.getHours();
			this.mins = arg1.getMinutes();
		} else if (arg1 instanceof CalendarDate) {
			this.hours = arg1.hours;
			this.mins = arg1.minutes;
		} else {
			this.hours = arg1;
			this.mins = arg2!;
		}
	}

	public static createRelativeTo(date: Date | CalendarDate, relative: Date | CalendarDate): TimeItem {
		if (relative.valueOf() > date.valueOf()) {
			throw new Error(`Time must be set relative to a date in the past!`);
		}
		const msDifference = date.valueOf() - relative.valueOf();
		const hours = Math.floor(msDifference / (1000 * 60 * 60));
		const minutes = Math.floor((msDifference % (1000 * 60 * 60)) / (1000 * 60));
		return new TimeItem(hours, minutes);
	}

	public static isEqual = (itemA: TimeItem, itemB: TimeItem): boolean => {
		const isSameHour = itemA.hours === itemB.hours;
		const isSameMins = itemA.mins === itemB.mins;
		return isSameHour && isSameMins;
	};

	public valueOf(): number {
		const mins = this.mins / 60;
		return this.hours + mins;
	}

	public toString(): string {
		const date = new Date();
		date.setHours(this.hours);
		date.setMinutes(this.mins);
		return dateFormat(date, 'shortTime').toLowerCase();
	}
}
