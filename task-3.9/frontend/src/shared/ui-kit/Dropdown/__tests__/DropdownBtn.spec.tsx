import { renderWithThemeContext } from '../../../test/common';
import { Dropdown } from '../Dropdown';
import { DropdownButton } from '../DropdownButton';
import { fireEvent } from '@testing-library/react';
import { Menu, MenuItem } from '../../Menu';
import { vi } from 'vitest';

describe('DropdownBtn test', () => {
	it('should render DropdownBtn', () => {
		const { getByText } = renderWithThemeContext(
			<Dropdown>
				<DropdownButton color="primary">Dropdown Btn</DropdownButton>
			</Dropdown>,
		);

		const btn = getByText('Dropdown Btn');

		expect(btn).toBeInTheDocument();
	});

	it('should toggle dropdown state', () => {
		const mockHandler = vi.fn();

		const { getByText, queryByText } = renderWithThemeContext(
			<Dropdown>
				<DropdownButton color="primary" onClick={mockHandler}>
					Dropdown Btn
				</DropdownButton>
				<Menu>
					<MenuItem>1</MenuItem>
				</Menu>
			</Dropdown>,
		);

		const btn = getByText('Dropdown Btn');
		let menuItem = queryByText('1');

		expect(menuItem).not.toBeInTheDocument();

		fireEvent.click(btn, {});
		menuItem = queryByText('1');

		expect(mockHandler).toHaveBeenCalled();
		expect(menuItem).toBeInTheDocument();

		fireEvent.click(btn, {});
		menuItem = queryByText('1');

		expect(mockHandler).toHaveBeenCalledTimes(2);
		expect(menuItem).not.toBeInTheDocument();
	});
});
