import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Init App', () => {
	it('should render App component', async () => {
		render(<App />);
		const element = await screen.findByText('Buttons');
		screen.debug();
		expect(element).toBeInTheDocument();
	});
});
