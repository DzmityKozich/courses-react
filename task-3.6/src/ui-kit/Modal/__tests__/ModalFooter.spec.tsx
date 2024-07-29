import { render } from '@testing-library/react';
import { ModalFooter } from '../ModalFooter';

describe('ModalFooter test', () => {
	it('should render ModalFooter component', () => {
		const { getByTestId } = render(
			<ModalFooter>
				<div data-testid="modalfooter-content"></div>
			</ModalFooter>,
		);

		const modalFooterContent = getByTestId('modalfooter-content');

		expect(modalFooterContent).toBeInTheDocument();
	});
});
