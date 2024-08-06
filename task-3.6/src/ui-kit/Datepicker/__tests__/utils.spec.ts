import { vi } from 'vitest';
import { getMonthData, getYearList, isFirstAvailableMonth, isLastAvailableMonth } from '../utils';

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

	it('should', () => {
		const dates = getMonthData(2021, 0);

		expect(dates).toBeTruthy();
	});
});
