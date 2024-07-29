import { vi } from 'vitest';
import { ModalHeader } from '../ModalHeader';
import { ModalContext } from '../ModalContext';
import { renderWithThemeContext } from '../../../test/common';
import { fireEvent } from '@testing-library/react';

const mockCloseHandler = vi.fn();

const renderModalHeader = () => {
	return renderWithThemeContext(
		<ModalContext.Provider value={{ onClose: mockCloseHandler }}>
			<ModalHeader>
				<div data-testid="modalheader-content"></div>
			</ModalHeader>
		</ModalContext.Provider>,
	);
};

describe('ModalHeader tetst', () => {
	it('should render ModalHeader component', () => {
		const { getByTestId } = renderModalHeader();

		const modalHeaderContent = getByTestId('modalheader-content');

		expect(modalHeaderContent).toBeInTheDocument();
	});

	it('should handle close', () => {
		const { getByRole } = renderModalHeader();

		const closeBtn = getByRole('close');

		fireEvent.click(closeBtn);

		expect(mockCloseHandler).toHaveBeenCalled();
	});
});
