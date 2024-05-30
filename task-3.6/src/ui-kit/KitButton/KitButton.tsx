import styled, { css } from 'styled-components';
import { Colors, Theme } from '../../themes/types';
import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

// 1) выделить какие поля нам нужны для темы
// 2) выделить какие цвета нам нужны для какой темы и распределить из по полям темы
// 3) использовать styled-components для стилей компонентов
// 4) использовать темы как background-color: ${theme[`btn-${primary}-bgc`]};

type KitButtonProps = {
	color: Colors;
	icon?: ReactNode;
	children?: ReactNode;
};

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<KitButtonProps & { theme: Theme }>`
	padding: 0.5rem 0.75rem;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;

	${({ color, theme }) => css`
		background-color: ${theme.buttons[color].bgColor};
		border-color: ${theme.buttons[color].borderColor};
		color: ${theme.buttons[color].textColor};

		&:hover {
			background-color: ${theme.buttons[color].hover.bgColor};
			border-color: ${theme.buttons[color].hover.borderColor};
			color: ${theme.buttons[color].hover.textColor};
		}

		&:active {
			background-color: ${theme.buttons[color].active.bgColor};
			border-color: ${theme.buttons[color].active.borderColor};
			color: ${theme.buttons[color].active.textColor};
		}

		&:disabled {
			background-color: ${theme.buttons[color].disabled.bgColor};
			border-color: ${theme.buttons[color].disabled.borderColor};
			color: ${theme.buttons[color].disabled.textColor};
		}
	`}
`;

export const KitButton: React.FC<KitButtonProps & ButtonProps> = ({ color, icon, children, ...btnProps }) => {
	const theme = useContext(ThemeContext);

	return (
		<StyledButton color={color} {...btnProps} theme={theme as any}>
			<div className="flex flex-row justify-center items-center gap-1">
				{icon && icon}
				{children}
			</div>
		</StyledButton>
	);
};
