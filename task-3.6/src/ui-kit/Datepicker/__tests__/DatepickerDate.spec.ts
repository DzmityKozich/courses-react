import { DatepickerDate } from '../DatepikerDate';

describe('DeatepickerDate test', () => {
	it('should create DatepickerDate object', () => {
		const result = new DatepickerDate();

		expect(result).toBeTruthy();
	});

	it('should create DatepickerDate object with current date', () => {
		const datepickerDate = new DatepickerDate();

		expect(datepickerDate.toDate().toString()).toBe(new Date().toString());
	});

	it('should create DatepickerDate object with specific date', () => {
		const date = new Date(2000, 3, 15);
		const datepickerDate = new DatepickerDate(date);

		expect(datepickerDate.toDate().toString()).toBe(date.toString());
	});

	it('should check isToday', () => {
		const todayDate = new DatepickerDate();
		const otherDate = new DatepickerDate(new Date('1995-12-17T03:24:00'));

		expect(todayDate.isToday).toBe(true);
		expect(otherDate.isToday).toBe(false);
	});

	it('should return day of the week', () => {
		const date = new DatepickerDate(new Date(2021, 0, 1));

		expect(date.dayOfWeek).toBe(5);
	});

	it('should retun day of the month', () => {
		const date = new DatepickerDate(new Date(2021, 0, 1));

		expect(date.monthDate).toBe(1);
	});

	it('should retunt month index', () => {
		const date = new DatepickerDate(new Date(2021, 0, 1));

		expect(date.month).toBe(0);
	});

	it('should return year', () => {
		const date = new DatepickerDate(new Date(2021, 0, 1));

		expect(date.year).toBe(2021);
	});

	it('should check if date is the day of the month', () => {
		const date = new DatepickerDate(new Date(2021, 0, 1));

		expect(date.isDayOfMonth(2021, 0)).toBe(true);
		expect(date.isDayOfMonth(2020, 0)).toBe(false);
		expect(date.isDayOfMonth(2021, 2)).toBe(false);
	});

	it('should retunt timestamp', () => {
		const date = new Date();
		const datepickerDate = new DatepickerDate(date);

		expect(datepickerDate.timestamp).toBe(date.getTime());
	});

	it('shoud check if the same dates', () => {
		const date = new DatepickerDate(new Date(2021, 0, 1));
		const dateA = new DatepickerDate(new Date(2021, 0, 1));
		const dateB = new DatepickerDate(new Date(2000, 11, 1));

		expect(date.isSameDate(dateA)).toBe(true);
		expect(date.isSameDate(dateB)).toBe(false);
	});

	it('should retunr Date object', () => {
		const date = new Date(2021, 0, 1);
		const datepickerDate = new DatepickerDate(new Date(2021, 0, 1));

		expect(datepickerDate.toDate()).toEqual(date);
		expect(datepickerDate.toDate()).toBeInstanceOf(Date);
	});
});
