import { forwardRef, useMemo, useState } from 'react';
import { KitColorpickerProps } from './types';
import styled, { css } from 'styled-components';
import classNames from 'classnames';

const ColorpickerPanel = styled.div`
	padding: 0.75rem;
	border: 1px solid #dedfe5;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	row-gap: 1rem;
	place-items: center;
	border-radius: 8px;

	${({ theme }) => css`
		background-color: ${theme.defaultStyles.bgColor};
	`}
`;

const ColorItemHolder = styled.div`
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 5px;
	border: 1px transparent solid;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	${({ theme }) => css`
		&.selected {
			border: 1px ${theme.defaultStyles.textColor} solid;
		}
	`}
`;

const ColorItem = styled.div`
	width: 1rem;
	height: 1rem;
	border-radius: 4px;
	background-color: currentColor;
	cursor: pointer;
`;

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
					<ColorItem style={{ color }} />
				</ColorItemHolder>
			))}
		</ColorpickerPanel>
	);
});
