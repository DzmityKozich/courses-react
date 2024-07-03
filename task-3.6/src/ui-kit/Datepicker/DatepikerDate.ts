export class DatepickerDate {
	private date: Date = new Date();

	constructor(date?: Date) {
		if (date) {
			this.date = date;
		}
	}

	public get isToday(): boolean {
		return this.date.getTime() === new Date().getTime();
	}

	public get dayOfWeek(): number {
		return this.date.getDay();
	}

	public get monthDate(): number {
		return this.date.getDate();
	}

	public get month() {
		return this.date.getMonth();
	}

	public get year() {
		return this.date.getFullYear();
	}

	public isDayOfMonth(year: number, month: number): boolean {
		if (this.date.getMonth() !== month) return false;
		return this.date.getFullYear() === year;
	}

	public get timestamp() {
		return this.date.getTime();
	}

	public isSameDate(date: DatepickerDate): boolean {
		const isSameYear = this.year === date.year;
		const isSameMonth = this.month === date.month;
		const isSameDate = this.monthDate === date.monthDate;
		return isSameYear && isSameMonth && isSameDate;
	}
}
