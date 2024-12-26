import { ArrowDown } from '../ArrowDown';
import { renderIcon } from './common';

describe('ArrowDown test', () => {
	it('should render ArrowDown component', () => {
		const icon = renderIcon(<ArrowDown color="inherit" />);

		expect(icon).toBeInTheDocument();
	});
});
