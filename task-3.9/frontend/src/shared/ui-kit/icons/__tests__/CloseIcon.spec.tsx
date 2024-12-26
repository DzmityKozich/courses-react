import { CloseIcon } from '../CloseIcon';
import { renderIcon } from './common';

describe('CloseIcon test', () => {
	it('should render CloseIcon component', () => {
		const icon = renderIcon(<CloseIcon color="pprimary" />);

		expect(icon).toBeInTheDocument();
	});
});
