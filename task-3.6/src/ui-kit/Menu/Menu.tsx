import React, { ReactNode, useContext } from 'react';

import './Menu.scss';
import styled, { css } from 'styled-components';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';

type Props = {
	children: ReactNode | ReactNode[];
};

const StyledDiv = styled.div`
	padding: 0.5rem;
	border: 1px #dee0e5 solid;
	border-radius: 8px;
	background-color: #fff;
	/* position: fixed; */
`;

const StyledUl = styled.ul`
	list-style-type: none;
	padding: 0 0.5rem;

	& li {
		text-align: start;
	}
`;

export const Menu: React.FC<Props> = ({ children }) => {
	const context = useContext(DropdownContext);

	return (
		<>
			{context?.state.open && (
				<StyledDiv>
					<StyledUl>{children}</StyledUl>
				</StyledDiv>
			)}
		</>
	);
};
