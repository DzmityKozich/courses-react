import { renderHook } from '@testing-library/react';
import { SelectContextProps } from '../../../Select/types';
import { useSelectMenuItem } from '../useSelectMenuItem';
import { vi } from 'vitest';

const mockCompareFn = vi.fn((valueA, valueB) => valueA === valueB);

const createMockContext = (selectedValue: any, compareFn: any = mockCompareFn): SelectContextProps => {
	return {
		compareFn,
		selectedValue,
	} as any as SelectContextProps;
};

describe('useSelectMenuItem test', () => {
	it('should return selected equal true', () => {
		const {
			result: { current },
		} = renderHook(() => useSelectMenuItem({ value: 1, context: createMockContext(1) }));

		expect(current.selected).toBe(true);
		expect(mockCompareFn).toHaveBeenCalled();
		expect(mockCompareFn).toHaveBeenCalledWith(1, 1);
	});

	it('should return selected equal false', () => {
		const {
			result: { current },
		} = renderHook(() => useSelectMenuItem({ value: 1, context: createMockContext(2) }));

		expect(current.selected).toBe(false);
		expect(mockCompareFn).toHaveBeenCalled();
		expect(mockCompareFn).toHaveBeenCalledWith(1, 2);
	});

	it('should compare values without compareFn', () => {
		const {
			result: { current },
		} = renderHook(() => useSelectMenuItem({ value: 1, context: createMockContext(2, null) }));

		expect(current.selected).toBe(false);
		expect(mockCompareFn).toHaveBeenCalled();
		expect(mockCompareFn).toHaveBeenCalledWith(1, 2);
	});
});
