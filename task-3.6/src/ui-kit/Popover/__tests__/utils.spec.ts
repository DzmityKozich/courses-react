import { vi } from 'vitest';
import { calculatePopover } from '../utils';

const mockGetBoundingClientRectTargetEl = vi.fn();
const mockGetBoundingClientRectPopoverEl = vi.fn();

const mockTargetEl: HTMLElement = {
	getBoundingClientRect: mockGetBoundingClientRectTargetEl,
} as any as HTMLElement;

const mockPopoverEl: HTMLElement = {
	getBoundingClientRect: mockGetBoundingClientRectPopoverEl,
} as any as HTMLElement;

describe('Popover utils test', () => {
	it('should return default result', () => {
		const result = calculatePopover(null, null);

		expect(result).toEqual({ height: 400, minWidth: 200, position: { left: 0, top: 0 } });
	});

	it('should return position below targetEl', () => {
		window.innerHeight = 1000;
		mockGetBoundingClientRectTargetEl.mockReturnValueOnce({ x: 100, y: 100, height: 100, width: 100, bottom: 100 });
		mockGetBoundingClientRectPopoverEl.mockReturnValueOnce({ height: 400 });

		const result = calculatePopover(mockTargetEl, mockPopoverEl);

		expect(result).toEqual({ position: { top: 202, left: 150 }, minWidth: 100, height: 400 });
	});

	it('should return position above targetEl', () => {
		window.innerHeight = 500;
		mockGetBoundingClientRectTargetEl.mockReturnValueOnce({ x: 100, y: 550, height: 100, width: 100, bottom: 100 });
		mockGetBoundingClientRectPopoverEl.mockReturnValueOnce({ height: 400 });

		const result = calculatePopover(mockTargetEl, mockPopoverEl);

		expect(result).toEqual({ position: { top: 148, left: 150 }, minWidth: 100, height: 400 });
	});

	it('should return position below targetEl, but do height smaller', () => {
		window.innerHeight = 400;
		mockGetBoundingClientRectTargetEl.mockReturnValueOnce({ x: 100, y: 200, height: 100, width: 100, bottom: 100 });
		mockGetBoundingClientRectPopoverEl.mockReturnValueOnce({ height: 400 });

		const result = calculatePopover(mockTargetEl, mockPopoverEl);

		expect(result).toEqual({ position: { top: 302, left: 150 }, minWidth: 100, height: 290 });
	});
});
