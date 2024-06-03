import React, { ReactNode, useContext } from 'react';

import './MenuItem.scss';
import styled from 'styled-components';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';

const StyledLi = styled.li`
	padding: 0.45rem;
	cursor: pointer;
	transition: background-color 0.15s ease;

	&:hover {
		background-color: #f6f6f6;
	}

	&:active {
		background-color: #e3e3e3;
	}
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
