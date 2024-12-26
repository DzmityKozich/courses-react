import { render } from '@testing-library/react';
import { ModalBody } from '../ModalBody';

describe('ModalBody test', () => {
	it('should render ModalBody component', () => {
		const { getByTestId } = render(
			<ModalBody>
				<div data-testid="modallbody-content"></div>
			</ModalBody>,
		);

		const modalBodyContent = getByTestId('modallbody-content');

		expect(modalBodyContent).toBeInTheDocument();
	});
});
