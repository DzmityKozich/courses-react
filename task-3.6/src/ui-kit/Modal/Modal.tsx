import React from 'react';

import './Modals.scss';
import styled, { css } from 'styled-components';

const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 1rem;
	box-shadow: 0px 16px 50px 0px #0000003d;
	z-index: 99;
	border-radius: 8px;

	${({ theme }) => css`
		background-color: ${theme.defaultStyles.bgColor};
	`}
`;

type Props = {
	open: boolean;
};

export const Modal: React.FC<Props> = ({ open }) => {
	return (
		open && (
			<>
				<div className="backdrop"></div>
				<ModalContainer>hello</ModalContainer>
			</>
		)
	);
};
