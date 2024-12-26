import { EyeCloseIcon } from '../EyeCloseIcon';
import { renderIcon } from './common';

describe('EyeCloseIcon test', () => {
	it('should render EyeCloseIcon component', () => {
		const icon = renderIcon(<EyeCloseIcon color="pprimary" />);

		expect(icon).toBeInTheDocument();
	});
});
