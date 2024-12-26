import { ChevronLeftIcon } from '../ChevronLeftIcon';
import { renderIcon } from './common';

describe('ChevronLeftIcon test', () => {
	it('should render ChevronLeftIcon component', () => {
		const icon = renderIcon(<ChevronLeftIcon color="pprimary" />);

		expect(icon).toBeInTheDocument();
	});
});
