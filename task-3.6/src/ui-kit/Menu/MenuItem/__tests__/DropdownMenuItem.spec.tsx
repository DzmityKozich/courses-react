import { renderWithThemeContext } from '../../../../test/common';
import { DropdownContext } from '../../../Dropdown/DropdownContext';
import { DropdownMenuItem } from '../DropdownMenuItem';
import { vi } from 'vitest';
import { DropdownContextValue } from '../../../Dropdown/types';
import { fireEvent } from '@testing-library/react';

type Props = {
	content: string;
};

const mockToggleState = vi.fn();
const mockClickHandler = vi.fn();
const mockContext: DropdownContextValue = {
	toggleState: mockToggleState,
} as any as DropdownContextValue;

const renderDropdownMenuItem = ({ content }: Props) => {
	return renderWithThemeContext(
		<DropdownContext.Provider value={mockContext}>
			<DropdownMenuItem onClick={mockClickHandler}>{content}</DropdownMenuItem>
		</DropdownContext.Provider>,
	);
};

describe('SelectMenuItem tes', () => {
	beforeAll(() => {
		vi.useFakeTimers();
	});

	it('should render SelectMenuItem', () => {
		const { queryByText } = renderDropdownMenuItem({ content: 'text' });

		const item = queryByText('text');

		expect(item).toBeInTheDocument();
	});

	it('should handle click on element', () => {
		const { queryByText } = renderDropdownMenuItem({ content: 'text' });

		const item = queryByText('text');

		fireEvent.click(item!);
		vi.runAllTimers();

		expect(mockClickHandler).toHaveBeenCalled();
		expect(mockToggleState).toHaveBeenCalled();
	});
});
