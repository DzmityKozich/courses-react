import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { ThemeContext } from 'styled-components';
import { lightTheme } from '../../../themes/LightTheme';

describe('Button test', () => {
	it('should render primary Button', () => {
		render(
			<ThemeContext.Provider value={lightTheme}>
				<Button color="primary" type="button" data-testid="primary-btn">
					Button
				</Button>
				,
			</ThemeContext.Provider>,
		);
		const element = screen.queryByTestId('primary-btn');
		expect(element).toBeInTheDocument();
	});
});
