import { InputField } from '../InputField';
import { renderWithThemeContext } from '../../../test/common';
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

describe('InputField test', () => {
	it('should render InputField component', () => {
		const { queryByTestId } = renderWithThemeContext(<InputField data-testid="input-test" />);

		const input = queryByTestId('input-test');

		expect(input).toBeInTheDocument();
	});

	it('should render InputField with label', () => {
		const { queryByLabelText, queryByText } = renderWithThemeContext(<InputField id="test-id" label="input-test" />);

		const label = queryByText('input-test');
		const input = queryByLabelText('input-test');

		expect(label).toBeInTheDocument();
		expect(input).toBeInTheDocument();
	});

	it('should render InputField with required label', () => {
		const { queryByLabelText, queryByText } = renderWithThemeContext(<InputField id="test-id" label="input-test" required />);

		const label = queryByText('input-test*');
		const input = queryByLabelText('input-test*');

		expect(label).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(input).toBeRequired();
	});

	it('should render InputField with help text', () => {
		const { queryByText } = renderWithThemeContext(<InputField id="test-id" helpText="input-test" />);

		const helpText = queryByText('input-test');

		expect(helpText).toBeInTheDocument();
	});

	it('should render InputField with error', () => {
		const { queryByText, queryByTestId } = renderWithThemeContext(<InputField data-testid="test-id" helpText="input-test" error />);

		const errorText = queryByText('input-test');
		const input = queryByTestId('test-id');

		expect(errorText).toBeInTheDocument();
		expect(errorText).toHaveClass('text-red-500');
		expect(input?.parentElement).toHaveClass('error');
	});

	it('should hightlight InputField on focus', () => {
		const mockFocus = vi.fn();
		const mockBlur = vi.fn();

		const { queryByTestId } = renderWithThemeContext(<InputField data-testid="test-id" onFocus={mockFocus} onBlur={mockBlur} />);

		const input = queryByTestId('test-id');

		fireEvent.focus(input!);

		expect(input?.parentElement).toHaveClass('focused');
		expect(mockFocus).toHaveBeenCalledTimes(1);
		expect(mockBlur).not.toHaveBeenCalled();

		fireEvent.blur(input!);

		expect(input?.parentElement).not.toHaveClass('focused');
		expect(mockFocus).toHaveBeenCalledTimes(1);
		expect(mockBlur).toHaveBeenCalledTimes(1);
	});

	it('should render InputField with start and end element', () => {
		const { queryByText } = renderWithThemeContext(<InputField startElement={<span>start</span>} endElement={<span>end</span>} />);

		const startEl = queryByText('start');
		const endEl = queryByText('end');

		expect(startEl).toBeInTheDocument();
		expect(endEl).toBeInTheDocument();
	});
});
