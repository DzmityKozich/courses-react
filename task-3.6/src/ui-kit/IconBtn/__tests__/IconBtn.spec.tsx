import { renderWithThemeContext } from '../../../test/common';
import { PlayIcon } from '../../icons';
import { IconBtn } from '../IconBtn';

describe('IconBtn test', () => {
	it('should render IconBtn', () => {
		const { queryByTestId } = renderWithThemeContext(<IconBtn icon={<PlayIcon color="green" />} data-testid="icon-btn" />);

		const iconBtn = queryByTestId('icon-btn');

		expect(iconBtn).toBeInTheDocument();
	});
});
