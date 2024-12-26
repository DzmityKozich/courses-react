import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { Toast } from '../Toast';
import { fireEvent } from '@testing-library/react';

const mockOnClose = vi.fn();

describe('Toast test', () => {
	it('should render Toast component', () => {
		const { queryByText } = renderWithThemeContext(<Toast messge="Test Toast" onClose={mockOnClose} open={true}></Toast>);

		const toast = queryByText('Test Toast');

		expect(toast).toBeInTheDocument();
		expect(toast).toHaveClass('bottom-left');
		expect(toast).toHaveClass('leftAppearance');
	});

	it('should close Toast', () => {
		const { container } = renderWithThemeContext(<Toast messge="Test Toast" onClose={mockOnClose} open={true}></Toast>);

		const closeBtn = container.querySelector('button');

		fireEvent.click(closeBtn!);

		expect(closeBtn).toBeInTheDocument();
		expect(mockOnClose).toHaveBeenCalled();
	});
});
