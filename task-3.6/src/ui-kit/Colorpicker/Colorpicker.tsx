import { forwardRef, useMemo, useState } from 'react';
import { KitColorpickerProps } from './types';
import classNames from 'classnames';
import { ColorItem, ColorItemHolder, ColorpickerPanel } from './styled-elements';

export const Colorpicker = forwardRef<HTMLDivElement, KitColorpickerProps>(({ colors, selectColor, defaultColor }, ref) => {
	const [selectedColor, setSelectedColor] = useState(defaultColor);

	const uniqueColors = useMemo(() => {
		return [...new Set(colors).values()];
	}, [colors]);

	const onColorSelect = (color: string) => {
		setSelectedColor(color);
		selectColor?.(color);
	};

	return (
		<ColorpickerPanel ref={ref}>
			{uniqueColors.map((color) => (
				<ColorItemHolder key={color} className={classNames({ selected: color === selectedColor })} onClick={() => onColorSelect(color)}>
					<ColorItem style={{ color }}>{color}</ColorItem>
				</ColorItemHolder>
			))}
		</ColorpickerPanel>
	);
});
