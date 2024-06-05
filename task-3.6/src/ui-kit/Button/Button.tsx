import styled, { ThemeContext, css } from 'styled-components';
import { Theme } from '../../themes/types';
import { forwardRef, useContext } from 'react';
import { ButtonProps, KitButtonProps } from './types';

const StyledButton = styled.button<KitButtonProps & { theme: Theme }>`
	padding: 0.5rem 0.75rem;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;
	width: fit-content;

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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ color, icon, children, ...btnProps }, ref) => {
	const theme = useContext(ThemeContext);

	return (
		<StyledButton color={color} {...btnProps} theme={theme} ref={ref}>
			<div className="flex flex-row justify-center items-center gap-1">
				{icon && icon}
				{children}
			</div>
		</StyledButton>
	);
});
