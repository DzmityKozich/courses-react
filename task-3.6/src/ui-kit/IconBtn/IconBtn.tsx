import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { IconButtonProps } from './types';

const StyledBtn = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: 0;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	transition: background-color 0.15s ease;

	${({ theme }) => css`
		color: ${theme.defaultStyles.textColor};

		&:hover {
			background-color: ${theme.defaultStyles.listItemHoverColor};
		}

		&:active {
			background-color: ${theme.defaultStyles.listItemActiveColor};
		}

		&:disabled {
			background-color: transparent;
			color: ${theme.buttons.secondary.disabled.textColor};
		}
	`}
`;

export const IconBtn = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
	const { icon, ...btnProps } = props;

	return (
		<StyledBtn {...btnProps} ref={ref}>
			{icon}
		</StyledBtn>
	);
});
