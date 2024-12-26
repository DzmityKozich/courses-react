import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { Textarea } from '../Textarea';
import { fireEvent } from '@testing-library/react';
import { ThemeContext } from 'styled-components';
import { lightTheme } from '../../../themes/LightTheme';

const text =
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nihil possimus assumenda aspernatur necessitatibus animi aperiam tempore nobis, ipsa consectetur.';
const mockCalculateHeight = vi.hoisted(() => vi.fn());
vi.mock('../utils', () => ({
	calculateHeight: mockCalculateHeight,
}));

describe('Textarea test', () => {
	it('should render Textarea component', () => {
		const { queryByTestId } = renderWithThemeContext(<Textarea data-testid="textarea-test" />);

		const textarea = queryByTestId('textarea-test');

		expect(textarea).toBeInTheDocument();
	});

	it('should render shadow textarea', () => {
		const { container } = renderWithThemeContext(<Textarea data-testid="textarea-test" />);

		const shadowTextarea = container.querySelector('textarea[readonly]');

		expect(shadowTextarea).toBeInTheDocument();
		expect(shadowTextarea).toHaveStyle({ visibility: 'hidden', top: 0, left: 0, transform: 'translateZ(0)', position: 'absolute' });
	});

	it('should render Textarea with label', () => {
		const { queryByText, queryByLabelText } = renderWithThemeContext(<Textarea label="textarea" id="textarea-id" />);

		const label = queryByText('textarea');
		const textarea = queryByLabelText('textarea');

		expect(label).toBeInTheDocument();
		expect(textarea).toBeInTheDocument();
	});

	it('should render Textarea with required label', () => {
		const { queryByText, queryByLabelText } = renderWithThemeContext(<Textarea label="textarea" id="textarea-id" required />);

		const label = queryByText('textarea*');
		const textarea = queryByLabelText('textarea*');

		expect(label).toBeInTheDocument();
		expect(textarea).toBeInTheDocument();
	});

	it('should render Textarea with help text', () => {
		const { queryByText } = renderWithThemeContext(<Textarea label="textarea" id="textarea-id" helpText="help-text" />);

		const helpText = queryByText('help-text');

		expect(helpText).toBeInTheDocument();
	});

	it('should render Textarea with error', () => {
		const { queryByText, queryByTestId } = renderWithThemeContext(
			<Textarea label="textarea" data-testid="textarea-test" helpText="help-text" error />,
		);

		const textarea = queryByTestId('textarea-test');
		const helpText = queryByText('help-text');

		expect(helpText).toHaveClass('text-red-500');
		expect(textarea).toHaveClass('error');
	});

	it('should sync Textarea height on typing', () => {
		mockCalculateHeight.mockReturnValueOnce(100);
		const mockChangeHandler = vi.fn();

		const { queryByTestId } = renderWithThemeContext(<Textarea data-testid="textarea-test" onChange={mockChangeHandler} />);

		const textarea = queryByTestId('textarea-test');

		fireEvent.change(textarea!, { target: { value: text } });

		expect(mockChangeHandler).toHaveBeenCalled();
		expect(mockCalculateHeight).toHaveBeenCalled();
		expect(textarea).toHaveStyle({ height: '100px' });
	});

	it('should sync Textarea height on typing', () => {
		mockCalculateHeight.mockReturnValueOnce(70).mockReturnValueOnce(100);

		const { queryByDisplayValue, rerender } = renderWithThemeContext(<Textarea data-testid="textarea-test" value={'text'} />);

		let textarea = queryByDisplayValue('text');
		expect(mockCalculateHeight).toHaveBeenCalledTimes(1);
		expect(textarea).toHaveStyle({ height: '70px' });

		rerender(
			<ThemeContext.Provider value={lightTheme}>
				<Textarea data-testid="textarea-test" value={text} />
			</ThemeContext.Provider>,
		);

		textarea = queryByDisplayValue(text);
		expect(mockCalculateHeight).toHaveBeenCalledTimes(2);
		expect(textarea).toHaveStyle({ height: '100px' });
	});
});
