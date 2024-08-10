import { act, renderHook } from '@testing-library/react';
import { useDatepicker } from '../useDatepicker';
import { DatepickerDate } from '../DatepikerDate';
import * as utils from '../utils';
import { vi } from 'vitest';

const isFirstAvailableMonthSpy = vi.spyOn(utils, 'isFirstAvailableMonth');
const isLastAvailableMonthSpy = vi.spyOn(utils, 'isLastAvailableMonth');
const getYearListSpy = vi.spyOn(utils, 'getYearList');

describe('useDatepicker test', () => {
	it('should return default values', () => {
		const currentDate = new DatepickerDate();
		const { result } = renderHook(() => useDatepicker({}));

		expect(result.current.date.isToday).toBe(true);
		expect(result.current.month).toBe(currentDate.month);
		expect(result.current.year).toBe(currentDate.year);
		expect(getYearListSpy).toHaveBeenCalledWith(1990, 2030);
	});

	it('should return setted values', () => {
		const date = new Date(2024, 1);
		const { result } = renderHook(() => useDatepicker({ defaultDate: date, firstYear: 2000, lastYear: 2040 }));

		expect(result.current.date).toEqual(new DatepickerDate(date));
		expect(result.current.month).toBe(date.getMonth());
		expect(result.current.year).toBe(date.getFullYear());
		expect(getYearListSpy).toHaveBeenCalledWith(2000, 2040);
		// for (let i = 0; i < result.current.years.length; i++) {
		// 	expect(result.current.years[i]).toBe(2000 + i);
		// }
	});

	it('should set date', () => {
		const date = new DatepickerDate(new Date(2021, 0, 1));
		const { result } = renderHook(() => useDatepicker({}));

		expect(result.current.date.isToday).toBe(true);

		act(() => {
			result.current.setDate(date);
		});

		expect(result.current.date.year).toBe(2021);
		expect(result.current.date.month).toBe(0);
		expect(result.current.date.monthDate).toBe(1);
	});

	it('should set month', () => {
		const { result } = renderHook(() => useDatepicker({}));

		expect(result.current.month).toBe(new Date().getMonth());

		act(() => {
			result.current.setMonth(3);
		});

		expect(result.current.month).toBe(3);
	});

	it('should set year', () => {
		const { result } = renderHook(() => useDatepicker({}));

		expect(result.current.year).toBe(new Date().getFullYear());

		act(() => {
			result.current.setYear(2020);
		});

		expect(result.current.year).toBe(2020);
	});

	it('should check if last month', () => {
		const { result } = renderHook(() => useDatepicker({ defaultDate: new Date(2030, 11) }));

		expect(result.current.isLastMonth).toBe(true);
		expect(isLastAvailableMonthSpy).toHaveBeenCalledWith(2030, 2030, 11);

		act(() => {
			result.current.setMonth(6);
			result.current.setYear(2006);
		});

		expect(result.current.isLastMonth).toBe(false);
		expect(isLastAvailableMonthSpy).toHaveBeenLastCalledWith(2006, 2030, 6);
	});

	it('should check if first month', () => {
		const { result } = renderHook(() => useDatepicker({ defaultDate: new Date(1990, 0) }));

		expect(result.current.isFirstMonth).toBe(true);
		expect(isFirstAvailableMonthSpy).toHaveBeenCalledWith(1990, 1990, 0);

		act(() => {
			result.current.setMonth(6);
			result.current.setYear(2006);
		});

		expect(result.current.isLastMonth).toBe(false);
		expect(isFirstAvailableMonthSpy).toHaveBeenLastCalledWith(2006, 1990, 6);
	});

	it('should set next month', () => {
		const { result } = renderHook(() => useDatepicker({ defaultDate: new Date(2021, 1) }));

		act(() => {
			result.current.nextMonth();
		});

		expect(result.current.month).toBe(2);
		expect(isLastAvailableMonthSpy).toHaveBeenNthCalledWith(2, 2021, 2030, 1);
		expect(isLastAvailableMonthSpy).toHaveNthReturnedWith(2, false);
		expect(result.current.year).toBe(2021);
	});

	it('should set next month and year', () => {
		const { result } = renderHook(() => useDatepicker({ defaultDate: new Date(2021, 11) }));

		act(() => {
			result.current.nextMonth();
		});

		expect(result.current.month).toBe(0);
		expect(isLastAvailableMonthSpy).toHaveBeenNthCalledWith(2, 2021, 2030, 11);
		expect(isLastAvailableMonthSpy).toHaveNthReturnedWith(2, false);
		expect(result.current.year).toBe(2022);
	});

	it('should NOT set next month', () => {
		const { result } = renderHook(() => useDatepicker({ defaultDate: new Date(2030, 11) }));

		act(() => {
			result.current.nextMonth();
		});

		expect(result.current.month).toBe(11);
		expect(isLastAvailableMonthSpy).toHaveNthReturnedWith(2, true);
		expect(isLastAvailableMonthSpy).toHaveBeenNthCalledWith(2, 2030, 2030, 11);
		expect(result.current.year).toBe(2030);
	});

	it('should set prev month', () => {
		const { result } = renderHook(() => useDatepicker({ defaultDate: new Date(2021, 3) }));

		act(() => {
			result.current.prevMonth();
		});

		expect(result.current.month).toBe(2);
		expect(isFirstAvailableMonthSpy).toHaveBeenNthCalledWith(2, 2021, 1990, 3);
		expect(isFirstAvailableMonthSpy).toHaveNthReturnedWith(2, false);
		expect(result.current.year).toBe(2021);
	});

	it('should set prev month and year', () => {
		const { result } = renderHook(() => useDatepicker({ defaultDate: new Date(2021, 0) }));

		act(() => {
			result.current.prevMonth();
		});

		expect(result.current.month).toBe(11);
		expect(isFirstAvailableMonthSpy).toHaveBeenNthCalledWith(2, 2021, 1990, 0);
		expect(isFirstAvailableMonthSpy).toHaveNthReturnedWith(2, false);
		expect(result.current.year).toBe(2020);
	});

	it('should NOT set prev month', () => {
		const { result } = renderHook(() => useDatepicker({ defaultDate: new Date(1990, 0) }));

		act(() => {
			result.current.prevMonth();
		});

		expect(result.current.month).toBe(0);
		expect(isFirstAvailableMonthSpy).toHaveBeenNthCalledWith(2, 1990, 1990, 0);
		expect(isFirstAvailableMonthSpy).toHaveNthReturnedWith(2, true);
		expect(result.current.year).toBe(1990);
	});
});
