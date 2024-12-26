import { vi } from 'vitest';
import { useModal } from '../useModal';
import { fireEvent, render } from '@testing-library/react';

const mockCloseHandler = vi.fn();

const MockComponent: React.FC<{ handler: any }> = ({ handler }) => {
	const { handleClose } = useModal(handler);

	return (
		<button data-testid="test-btn" onClick={handleClose}>
			Button
		</button>
	);
};

describe('useModal test', () => {
	it('should set close handler into context', () => {
		const { getByTestId } = render(<MockComponent handler={mockCloseHandler} />);

		const testBtn = getByTestId('test-btn');

		fireEvent.click(testBtn);

		expect(mockCloseHandler).toHaveBeenCalled();
	});
});
