import { defaultColors } from '../index';
import { renderWithThemeContext } from '../../../test/common';
import { Colorpicker } from '../Colorpicker';
import { vi } from 'vitest';
import { fireEvent } from '@testing-library/react';

describe('Colorpicker test', () => {
	it('should render Colorpicker component', () => {
		const { queryByText } = renderWithThemeContext(<Colorpicker colors={defaultColors} />);

		const colorItems = defaultColors.map((color) => queryByText(color));

		colorItems.forEach((item) => {
			expect(item).toBeInTheDocument();
		});
	});

	it('should render unique colors', () => {
		const colors = [...defaultColors, ...defaultColors];

		const { queryAllByText } = renderWithThemeContext(<Colorpicker colors={colors} />);

		const colorItems = defaultColors.map((color) => queryAllByText(color));

		expect(colorItems.length).toBe(defaultColors.length);
	});

	it('should set defaultColor', () => {
		const { queryByText } = renderWithThemeContext(<Colorpicker colors={defaultColors} defaultColor={defaultColors[0]} />);

		const selectedColor = queryByText(defaultColors[0]);

		expect(selectedColor?.parentNode).toHaveClass('selected');
	});

	it('should select color', () => {
		const mockSelectColor = vi.fn();

		const { queryByText } = renderWithThemeContext(<Colorpicker colors={defaultColors} selectColor={mockSelectColor} />);

		const colorItem = queryByText(defaultColors[0]);

		fireEvent.click(colorItem!.parentNode!);

		expect(mockSelectColor).toHaveBeenCalledWith(defaultColors[0]);
	});
});
