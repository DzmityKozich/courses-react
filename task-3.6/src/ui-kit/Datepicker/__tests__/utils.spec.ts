import {
	addMissingDates,
	getDaysInMonth,
	getMonthData,
	getYearList,
	isFirstAvailableMonth,
	isLastAvailableMonth,
	splitByWeeks,
} from '../utils';
import { DatepickerDate } from '../DatepikerDate';

// vi.spyOn(global, 'Date');

describe('Datepicker utils test', () => {
	it('should return year listr', () => {
		const startYear = 2010;
		const lastYear = 2020;
		const years = getYearList(startYear, lastYear);

		for (let index = 0; index <= lastYear - startYear; index++) {
			expect(startYear + index).toBe(years[index]);
		}
	});

	it('should check if month is last available month', () => {
		expect(isLastAvailableMonth(2021, 2021, 11)).toBe(true);
		expect(isLastAvailableMonth(2020, 2021, 1)).toBe(false);
		expect(isLastAvailableMonth(2021, 2021, 1)).toBe(false);
	});

	it('should check if month is first available month', () => {
		expect(isFirstAvailableMonth(2021, 2021, 0)).toBe(true);
		expect(isFirstAvailableMonth(2020, 2021, 0)).toBe(false);
		expect(isFirstAvailableMonth(2021, 2021, 11)).toBe(false);
	});

	it('should return days of month', () => {
		const dates = getDaysInMonth(2021, 1);

		expect(dates).toHaveLength(28);
		for (let index = 0; index < dates.length; index++) {
			expect(dates[index].getDate()).toBe(index + 1);
		}
	});

	it('should fill full datepicker page', () => {
		const currentDate = new Date();
		const dates = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

		const page = addMissingDates(dates);

		expect(page.length % 7).toBe(0);
		for (let week = 0; week < page.length / 7; week++) {
			for (let day = 0; day < 7; day++) {
				const date = page[week * 7 + day];
				if (day + 1 < 7) {
					expect(date.getDay()).toBe(day + 1);
				} else {
					expect(date.getDay()).toBe(0);
				}
			}
		}
	});

	it('should split month to by weeks', () => {
		// February 2021
		const year = 2021;
		const month = 1;
		const totalDays = 28;
		const startDate = new Date(year, month);
		const dates: DatepickerDate[] = [];

		for (let day = 1; day <= totalDays; day++) {
			dates.push(new DatepickerDate(new Date(year, month, day)));
		}

		const splittedByWeeks = splitByWeeks(dates);

		expect(splittedByWeeks[0][0].dayOfWeek).toBe(startDate.getDay());

		let dateCounter = 1;
		for (let i = 0; i < splittedByWeeks.length; i++) {
			const week = splittedByWeeks[i];

			expect(week.length).toBeLessThanOrEqual(7);
			expect(week.length).not.toBe(0);

			const weekStart = i === 0 ? week[0].dayOfWeek : 1;
			for (let j = 0; j < week.length; j++) {
				const date = week[j];

				expect(date.monthDate).toBe(dateCounter);
				dateCounter++;

				if (weekStart + j < 7) {
					expect(date.dayOfWeek).toBe(weekStart + j);
				} else {
					expect(date.dayOfWeek).toBe(0);
				}
			}
		}
	});

	it('should get Datepicker month data', () => {
		const monthData = getMonthData(2024, 0);

		for (let i = 0; i < monthData.length; i++) {
			const week = monthData[i];
			expect(week).toHaveLength(7);

			for (let j = 0; j < week.length; j++) {
				const day = week[j];
				if (i === 0) {
					if (!day.isDayOfMonth(2024, 0)) {
						expect(day.month).toBe(11);
					}
				}

				if (i === monthData.length - 1) {
					if (!day.isDayOfMonth(2024, 0)) {
						expect(day.month).toBe(1);
					}
				}

				if (j !== 6) {
					expect(day.dayOfWeek).toBe(j + 1);
				} else {
					expect(day.dayOfWeek).toBe(0);
				}
			}
		}
	});
});
