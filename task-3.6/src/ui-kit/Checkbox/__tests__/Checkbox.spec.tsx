import { fireEvent } from '@testing-library/react';
import { renderWithThemeContext } from '../../../test/common';
import { Checkbox } from '../Checkbox';

describe('Checkbox test', () => {
	it('should render Checkbox', () => {
		const { queryByTestId } = renderWithThemeContext(<Checkbox data-testid="test-checkbox" />);

		const checkbox = queryByTestId('test-checkbox');

		expect(checkbox).toBeInTheDocument();
	});

	it('should render Checkbox with label', () => {
		const { queryByTestId, queryByText } = renderWithThemeContext(<Checkbox data-testid="test-checkbox" label="test" />);

		const checkbox = queryByTestId('test-checkbox');
		const label = queryByText('test');

		expect(checkbox).toBeInTheDocument();
		expect(label).toBeInTheDocument();
	});

	it('should check Checkbox', () => {
		const { queryByTestId } = renderWithThemeContext(<Checkbox data-testid="test-checkbox" label="test" />);

		const checkbox = queryByTestId('test-checkbox');

		fireEvent.click(checkbox!);

		expect(checkbox).toBeChecked();
	});

	it('should check Checkbox by click on label', () => {
		const { queryByTestId, queryByText } = renderWithThemeContext(<Checkbox data-testid="test-checkbox" label="test" id="test-checkbox" />);

		const checkbox = queryByTestId('test-checkbox');
		const label = queryByText('test');

		fireEvent.click(label!);

		expect(checkbox).toBeChecked();
	});

	it('should disable Checkbox', () => {
		const { queryByTestId, queryByText } = renderWithThemeContext(<Checkbox data-testid="test-checkbox" label="test" disabled />);

		const checkbox = queryByTestId('test-checkbox');
		const label = queryByText('test');

		expect(checkbox).toBeDisabled();
		expect(label).toHaveClass('disabled');
	});
});
