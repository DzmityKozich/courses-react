import { screen } from '@testing-library/react';
import { renderWithThemeContext } from '../../../test/common';
import { Label } from '../Label';

describe('Label test', () => {
	it('should render Label', () => {
		renderWithThemeContext(<Label data-testid="label">label</Label>);

		const label = screen.getByTestId('label');

		expect(label).toBeInTheDocument();
	});
});
