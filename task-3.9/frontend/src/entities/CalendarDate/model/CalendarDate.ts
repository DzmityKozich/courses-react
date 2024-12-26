import { DAYS_OF_WEEK, MONTHS } from 'shared/lib';
import dateFormat from 'dateformat';

export class CalendarDate {
	private _date: Date;

	constructor(date: number | string | Date) {
		this._date = new Date(date);
		this._date.setSeconds(0);
	}

	public get month() {
		return MONTHS[this._date.getMonth()];
	}

	public get monthIndex() {
		return this._date.getMonth();
	}

	public get date() {
		return this._date.getDate();
	}

	public get day() {
		return DAYS_OF_WEEK[this._date.getDay()];
	}

	public get year() {
		return this._date.getFullYear();
	}

	public toDate(): Date {
		return new Date(this._date);
	}

	public toISOString(): string {
		return this._date.toISOString();
	}

	public dateStartISO(): string {
		return new Date(this.year, this.monthIndex, this.date).toISOString();
	}

	public get hours(): number {
		return this._date.getHours();
	}

	public get minutes(): number {
		return this._date.getMinutes();
	}

	public set hours(value: number) {
		this._date.setHours(value);
	}

	public set minutes(value: number) {
		this._date.setMinutes(value);
	}

	public getShortTime(): string {
		return this.getFormatedDate('shortTime').toLowerCase();
	}

	public getFormatedDate(format: string): string {
		return dateFormat(this._date, format);
	}

	public isEqual(date: CalendarDate): boolean {
		return date.toDate().valueOf() === this._date.valueOf();
	}

	public isSameDate(date: CalendarDate): boolean {
		const isSameYear = this.year === date.year;
		const isSameMonth = this.month === date.month;
		const isSameDate = this.date === date.date;
		return isSameYear && isSameMonth && isSameDate;
	}

	public isToday(): boolean {
		const date = new Date();
		return this.year === date.getFullYear() && this.monthIndex === date.getMonth() && this.date === date.getDate();
	}

	public valueOf(): number {
		return this._date.valueOf();
	}
}
