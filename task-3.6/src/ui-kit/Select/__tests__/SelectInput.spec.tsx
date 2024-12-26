import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { SelectInput } from '../SelectInput';
import { SelectContext } from '../SelectContext';
import { SelectContextProps } from '../types';
import { fireEvent } from '@testing-library/react';

const mockRegisterTrigger = vi.fn();
const mockToggleState = vi.fn();

const context: SelectContextProps = {
	registerTrigger: mockRegisterTrigger,
	toggleState: mockToggleState,
} as any as SelectContextProps;

const renderSelectInput = () => {
	return renderWithThemeContext(
		<SelectContext.Provider value={context}>
			<SelectInput data-testid="select-test" />
		</SelectContext.Provider>,
	);
};

describe('SelectInput test', () => {
	it('should render SelectInput component', () => {
		const { queryByTestId } = renderSelectInput();

		const selectInput = queryByTestId('select-test');

		expect(selectInput).toBeInTheDocument();
	});

	it('should open Select', () => {
		const { queryByTestId } = renderSelectInput();

		const selectInput = queryByTestId('select-test');

		fireEvent.click(selectInput!);

		expect(mockRegisterTrigger).toHaveBeenCalled();
		expect(mockRegisterTrigger).toHaveBeenCalledWith(selectInput!.parentElement);
		expect(mockToggleState).toHaveBeenCalled();
	});
});
