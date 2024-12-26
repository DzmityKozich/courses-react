import { screen } from '@testing-library/react';
import { renderWithThemeContext } from '../../../test/common';
import { Dropdown } from '../Dropdown';
import { DropdownButton } from '../DropdownButton';

describe('Dropdown test', () => {
	it('should render Dropdown component', () => {
		renderWithThemeContext(
			<Dropdown>
				<DropdownButton color="primary">Dropdown Button</DropdownButton>
			</Dropdown>,
		);

		const dropdownBtn = screen.getByText('Dropdown Button');

		expect(dropdownBtn).toBeInTheDocument();
	});
});
