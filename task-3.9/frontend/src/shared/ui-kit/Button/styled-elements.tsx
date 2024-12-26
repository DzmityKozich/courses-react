import styled, { css } from 'styled-components';
import { KitButtonProps } from './types';

export const StyledButton = styled.button<KitButtonProps>`
	padding: 0.5rem 0.75rem;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;
	height: fit-content;
	cursor: pointer;

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

export const ButtonInner = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
`;
