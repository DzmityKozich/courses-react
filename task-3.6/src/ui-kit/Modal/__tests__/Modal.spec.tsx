import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { Modal } from '../Modal';
import { fireEvent } from '@testing-library/react';

const mockCloseHandler = vi.fn();

const renderModal = (open: boolean = true) => {
	return renderWithThemeContext(
		<Modal open={open} onClose={mockCloseHandler}>
			<div data-testid="modal-content"></div>
		</Modal>,
	);
};

describe('Modal test', () => {
	it('should render Modal component', () => {
		const { getByTestId } = renderModal();

		const modalContent = getByTestId('modal-content');

		expect(modalContent).toBeInTheDocument();
	});

	it('should handle close', () => {
		const { getByRole } = renderModal();

		let backdrop = getByRole('backdrop');
		expect(backdrop).toBeInTheDocument();

		fireEvent.click(backdrop);

		backdrop = getByRole('backdrop');
		expect(mockCloseHandler).toHaveBeenCalled();
	});
});
