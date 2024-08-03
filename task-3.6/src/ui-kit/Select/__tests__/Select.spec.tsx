import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { MenuItem } from '../../Menu';
import { Select } from '../Select';

const mockSelect = vi.fn();

describe('Select test', () => {
	it('should render Select component', () => {
		const { queryByDisplayValue } = renderWithThemeContext(
			<Select select={mockSelect} value={1}>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
			</Select>,
		);

		const select = queryByDisplayValue('1');

		expect(select).toBeInTheDocument();
	});
});
