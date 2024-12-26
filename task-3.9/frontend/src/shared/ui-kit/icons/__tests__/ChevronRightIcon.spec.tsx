import { ChevronRightIcon } from '../ChevronRightIcon';
import { renderIcon } from './common';

describe('ChevronRightIcon test', () => {
	it('should render ChevronRightIcon component', () => {
		const icon = renderIcon(<ChevronRightIcon color="pprimary" />);

		expect(icon).toBeInTheDocument();
	});
});
