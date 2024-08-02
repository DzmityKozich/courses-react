import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { Toast } from '../Toast';

const mockOnClose = vi.fn();

describe('Toast test', () => {
	it('should render Toast component', () => {
		const { queryByText } = renderWithThemeContext(<Toast messge="Test Toast" onClose={mockOnClose} open={true}></Toast>);

		const toast = queryByText('Test Toast');

		expect(toast).toBeInTheDocument();
		expect(toast).toHaveClass('bottom-left');
		expect(toast).toHaveClass('leftAppearance');
	});

	it('');
});
