import { renderWithThemeContext } from '../../../../test/common';
import { MenuItem } from '../MenuItem';

describe('MenuItem test', () => {
	it('should render MenuItem', () => {
		const { queryByText } = renderWithThemeContext(<MenuItem>Menu Item</MenuItem>);

		const menuItem = queryByText('Menu Item');

		expect(menuItem).toBeInTheDocument();
	});
});
