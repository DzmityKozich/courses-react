import React, { ReactNode, useContext } from 'react';
import styled, { css } from 'styled-components';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';
import { Popover } from '../Popover';

import './Menu.scss';

type Props = {
	children: ReactNode | ReactNode[];
};

const StyledDiv = styled.div`
	overflow: auto;

	${({ theme }) => css`
		background-color: ${theme.defaultStyles.bgColor};
		color: ${theme.defaultStyles.textColor};
	`}
`;

const StyledUl = styled.ul`
	list-style-type: none;

	& li {
		text-align: start;
	}
`;

export const Menu: React.FC<Props> = ({ children }) => {
	const context = useContext(DropdownContext);

	return (
		<Popover open={context?.state.open!} toggleState={context?.toggleState!} triggerElement={context?.triggerElement!}>
			<StyledDiv>
				<StyledUl>{children}</StyledUl>
			</StyledDiv>
		</Popover>
	);
};
