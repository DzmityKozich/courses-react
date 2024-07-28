import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { Popover } from '../Popover';
import { fireEvent } from '@testing-library/react';

vi.mock('../utils', () => ({
	calculatePopover: vi.fn().mockReturnValue({ height: 400, minWidth: 200, position: { left: 100, top: 100 } }),
}));

const mockToggle = vi.fn();
const mockTriggerElContaiins = vi.fn();
const mockTriggerEl: HTMLElement = {
	contains: mockTriggerElContaiins,
} as any as HTMLElement;

const renderPopover = (open: boolean = true) => {
	return renderWithThemeContext(
		<Popover open={open} toggleState={mockToggle} triggerElement={mockTriggerEl}>
			<div data-testid="test-content"></div>
		</Popover>,
	);
};

describe('Popover test', () => {
	afterEach(() => {
		mockToggle.mockClear();
	});

	it('should render Popover', () => {
		const { getByTestId } = renderPopover();

		const popoverContent = getByTestId('test-content');

		expect(popoverContent).toBeInTheDocument();
		expect(popoverContent.parentElement).toHaveClass('entering');
	});

	it('should calculate Popover style settings', () => {
		const { getByTestId } = renderPopover();

		const popoverContent = getByTestId('test-content');

		expect(popoverContent.parentElement).toHaveStyle({ height: '400px', 'min-width': '200px', left: '100px', top: '100px' });
	});

	it('should close Popover on blur event', () => {
		mockTriggerElContaiins.mockReturnValueOnce(false);
		const { getByTestId } = renderPopover();

		const popoverContent = getByTestId('test-content');
		fireEvent.blur(popoverContent.parentElement!);
		expect(mockToggle).toHaveBeenCalled();
	});

	it('should close Popover on esc keydown', () => {
		renderPopover();

		fireEvent.keyDown(document, { key: 'Escape' });
		expect(mockToggle).toHaveBeenCalled();
	});

	it('should not affect closed Popover on esc keydown', () => {
		renderPopover(false);

		fireEvent.keyDown(document, { key: 'Escape' });
		expect(mockToggle).not.toHaveBeenCalled();
	});
});
