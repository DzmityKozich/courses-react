import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../../test/common';
import { DropdownContext } from '../../../Dropdown/DropdownContext';
import { DropdownContextValue } from '../../../Dropdown/types';
import { SelectContext } from '../../../Select/SelectContext';
import { MenuItem } from '../MenuItem';
import { SelectContextProps } from '../../../Select/types';
import { ReactNode } from 'react';
import { fireEvent } from '@testing-library/react';

const mockDropdownContextToggleState = vi.fn();
const mockSelectContextToggleState = vi.fn();

const mockDropdownContext: DropdownContextValue = {
	toggleState: mockDropdownContextToggleState,
} as any as DropdownContextValue;

const mockSelectContext: SelectContextProps = {
	toggleState: mockSelectContextToggleState,
	onSelect: vi.fn(),
} as any as SelectContextProps;

const renderMenuItem = (menuItem: ReactNode) => {
	return renderWithThemeContext(
		<DropdownContext.Provider value={mockDropdownContext}>
			<SelectContext.Provider value={mockSelectContext}>{menuItem}</SelectContext.Provider>
		</DropdownContext.Provider>,
	);
};

describe('MenuItem test', () => {
	beforeAll(() => {
		vi.useFakeTimers();
	});

	// afterEach(() => {
	// 	mockSelectContextToggleState.mockClear();
	// 	mockDropdownContextToggleState.mockClear();
	// });

	it('should render MenuItem', () => {
		const { queryByText } = renderMenuItem(<MenuItem>Menu Item</MenuItem>);

		const menuItem = queryByText('Menu Item');

		expect(menuItem).toBeInTheDocument();
	});

	it('should render DropdownMenuItem', () => {
		const { queryByText } = renderMenuItem(<MenuItem>Menu Item</MenuItem>);

		const menuItem = queryByText('Menu Item');

		fireEvent.click(menuItem!);

		vi.runAllTimers();

		expect(mockDropdownContextToggleState).toHaveBeenCalled();
		expect(mockSelectContextToggleState).not.toHaveBeenCalled();
	});

	it('should render SelectMenuItem', () => {
		const { queryByText } = renderMenuItem(<MenuItem value={1}>Menu Item</MenuItem>);

		const menuItem = queryByText('Menu Item');

		fireEvent.click(menuItem!);

		vi.runAllTimers();

		expect(mockDropdownContextToggleState).not.toHaveBeenCalled();
		expect(mockSelectContextToggleState).toHaveBeenCalled();
	});
});
