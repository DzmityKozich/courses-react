import { renderWithThemeContext } from '../../../../test/common';
import { SelectContext } from '../../../Select/SelectContext';
import { SelectContextProps } from '../../../Select/types';
import { SelectMenuItem } from '../SelectMenuItem';
import { vi } from 'vitest';
import { fireEvent } from '@testing-library/react';

type Props = {
	content: string;
	value: any;
};

vi.mock('../useSelectMenuItem', () => ({
	useSelectMenuItem: vi.fn().mockReturnValue({ selected: true }),
}));

const mockClickHandler = vi.fn();
const mockOnSelect = vi.fn();
const mockToggleState = vi.fn();
const mockContext: SelectContextProps = {
	onSelect: mockOnSelect,
	toggleState: mockToggleState,
} as any as SelectContextProps;

const renderSelectMenuItem = ({ content, value }: Props) => {
	return renderWithThemeContext(
		<SelectContext.Provider value={mockContext}>
			<SelectMenuItem value={value} onClick={mockClickHandler}>
				{content}
			</SelectMenuItem>
		</SelectContext.Provider>,
	);
};

describe('SelectMenuItem tes', () => {
	beforeAll(() => {
		vi.useFakeTimers();
	});

	it('should render SelectMenuItem', () => {
		const { queryByText } = renderSelectMenuItem({ content: 'text', value: 1 });

		const item = queryByText('text');

		expect(item).toBeInTheDocument();
		expect(item).toHaveClass('selected');
	});

	it('should select value', () => {
		const { queryByText } = renderSelectMenuItem({ content: 'text', value: 1 });

		const item = queryByText('text');

		fireEvent.click(item!);
		vi.runAllTimers();

		expect(mockClickHandler).toHaveBeenCalled();
		expect(mockOnSelect).toHaveBeenCalledWith(1);
		expect(mockToggleState).toHaveBeenCalled();
	});
});
