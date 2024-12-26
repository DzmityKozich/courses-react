import { CheckIcon } from '../CheckIcon';
import { renderIcon } from './common';

describe('CheckIcon test', () => {
	it('should render CheckIcon component', () => {
		const icon = renderIcon(<CheckIcon color="primary" />);

		expect(icon).toBeInTheDocument();
	});
});
