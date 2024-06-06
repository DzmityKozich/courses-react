import React, { ReactNode, useContext } from 'react';
import styled, { css } from 'styled-components';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';

import './MenuItem.scss';

const StyledLi = styled.li`
	padding: 0.45rem;
	cursor: pointer;
	transition: background-color 0.15s ease;

	${({ theme }) => css`
		&:hover {
			background-color: ${theme.defaultStyles.listItemHoverColor};
		}

		&:active {
			background-color: ${theme.defaultStyles.listItemActiveColor};
		}
	`}
`;

type Props = React.HTMLAttributes<HTMLLIElement> & {
	children: ReactNode;
};

export const MenuItem: React.FC<Props> = (props) => {
	const { children, onClick, ...liProps } = props;

	const context = useContext(DropdownContext);

	const handleClick = (event: any) => {
		onClick?.(event);
		setTimeout(() => {
			context?.toggleState();
		}, 150);
	};

	return (
		<StyledLi {...liProps} onClick={handleClick}>
			{children}
		</StyledLi>
	);
};
