import { screen } from '@testing-library/react';
import { renderWithContext } from '../../../test/common';
import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import { DropdownContext } from '../../Dropdown/DropdownContext';
import { DropdownContextValue } from '../../Dropdown/types';

const contextValue: DropdownContextValue = { state: { open: true } } as DropdownContextValue;

describe('Menu test', () => {
	it('should render Menu', () => {
		renderWithContext(
			<DropdownContext.Provider value={contextValue}>
				<Menu>
					<MenuItem>Test Menu Item</MenuItem>
					<MenuItem>Test Menu Item</MenuItem>
					<MenuItem>Test Menu Item</MenuItem>
				</Menu>
			</DropdownContext.Provider>,
		);

		const menu = screen.getByTestId('Menu');
		const menuItems = screen.queryAllByText('Test Menu Item');

		expect(menu).toBeInTheDocument();
		expect(menuItems.length).toBe(3);
	});
});
