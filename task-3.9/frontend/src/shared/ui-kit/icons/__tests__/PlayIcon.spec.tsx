import { PlayIcon } from '../PlayIcon';
import { renderIcon } from './common';

describe('PlayIcon test', () => {
	it('should render PlayIcon component', () => {
		const icon = renderIcon(<PlayIcon color="pprimary" />);

		expect(icon).toBeInTheDocument();
	});
});
