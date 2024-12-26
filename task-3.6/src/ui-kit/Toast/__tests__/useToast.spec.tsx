import { renderHook } from '@testing-library/react';
import { useToast } from '../useToast';
import { vi } from 'vitest';

const mockOnCloseHandler = vi.fn();

const appearanceMap: Record<'bottom-left' | 'top-left' | 'top-center' | 'top-right' | 'bottom-right' | 'bottom-center', string> = {
	'bottom-center': 'bottomAppearance',
	'bottom-left': 'leftAppearance',
	'bottom-right': 'rightAppearance',
	'top-center': 'topAppearance',
	'top-left': 'leftAppearance',
	'top-right': 'rightAppearance',
};

describe('useToast test', () => {
	beforeAll(() => {
		vi.useFakeTimers();
	});

	it('should get appearance animation', () => {
		Object.entries(appearanceMap).forEach(([position, value]: any) => {
			const { result } = renderHook(() => useToast({ onClose: mockOnCloseHandler, open: false, position, autoHideDuration: 0 }));

			expect(result.current.appearance).toBe(value);
		});
	});

	it('should hide Toast component', () => {
		renderHook(() => useToast({ onClose: mockOnCloseHandler, open: true, position: 'bottom-center', autoHideDuration: 3000 }));

		vi.runAllTimers();

		expect(mockOnCloseHandler).toHaveBeenCalled();
	});

	it('should hide Toast in 3s', () => {
		const timerSpy = vi.spyOn(global, 'setTimeout');

		renderHook(() => useToast({ onClose: mockOnCloseHandler, open: true, position: 'bottom-center', autoHideDuration: 3000 }));

		vi.runAllTimers();

		expect(mockOnCloseHandler).toHaveBeenCalledTimes(1);
		expect(timerSpy).toHaveBeenCalledWith(expect.any(Function), 3000);
	});
});
