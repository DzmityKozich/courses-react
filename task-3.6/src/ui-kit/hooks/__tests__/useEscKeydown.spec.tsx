import { vi } from 'vitest';
import { useEscKeydown } from '../useEscKeydown';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

const mockHandler = vi.fn();

const MockComponent: React.FC<{ handler: any }> = ({ handler }) => {
	useEscKeydown(handler);

	return <div className=""></div>;
};

describe('useEscKeydown test', () => {
	it('should trigger handler', () => {
		render(<MockComponent handler={mockHandler} />);

		fireEvent.keyDown(document, { key: 'Escape' });

		expect(mockHandler).toHaveBeenCalled();
	});

	it('should not trigger handler', () => {
		render(<MockComponent handler={mockHandler} />);

		fireEvent.keyDown(document, { key: 'A' });

		expect(mockHandler).not.toHaveBeenCalled();
	});
});
