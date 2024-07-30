import { ReactNode } from 'react';
import { renderWithThemeContext } from '../../../../test/common';
import { SelectContext } from '../../../Select/SelectContext';
import { SelectMenuItem } from '../SelectMenuItem';
import { SelectContextProps } from '../../../Select/types';
import { vi } from 'vitest';

type Props = {
	content: string;
};

const mockOnSelect = vi.fn();
const mockToggleState = vi.fn();
const mockContext: SelectContextProps = {
	onSelect: mockOnSelect,
	toggleState: mockToggleState,
} as any as SelectContextProps;

const renderSelectMenuItem = ({ content }: Props) => {
	return renderWithThemeContext(
		<SelectContext.Provider value={mockContext}>
			<SelectMenuItem>{content}</SelectMenuItem>
		</SelectContext.Provider>,
	);
};

describe('SelectMenuItem tes', () => {
	it('should render SelectMenuItem', () => {
		const { queryByText } = renderSelectMenuItem({ content: 'text' });

		const item = queryByText('text');

		expect(item).toBeInTheDocument();
	});
});
