import { EyeIcon } from '../Eye';
import { renderIcon } from './common';

describe('Eye test', () => {
	it('should render Eye component', () => {
		const icon = renderIcon(<EyeIcon color="pprimary" />);

		expect(icon).toBeInTheDocument();
	});
});
