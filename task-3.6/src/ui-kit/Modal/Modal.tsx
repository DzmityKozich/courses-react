import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import './Modals.scss';
import { ModalContext, useModal } from '../hooks/useModal';
import { useEscKeydown } from '../hooks/useEscKeydown';

const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 1rem;
	box-shadow: 0px 16px 50px 0px #0000003d;
	z-index: 99;
	border-radius: 8px;
	padding: 1rem;
	min-width: 250px;
	max-width: 80%;

	${({ theme }) => css`
		background-color: ${theme.defaultStyles.bgColor};
	`}
`;

type Props = {
	open: boolean;
	onClose: () => void;
	children: ReactNode[] | ReactNode;
};

export const Modal: React.FC<Props> = ({ open, onClose, children }) => {
	const { handleClose } = useModal(onClose);
	useEscKeydown(handleClose);

	return (
		open && (
			<ModalContext.Provider value={{ onClose: handleClose }}>
				<div className="backdrop appearance-animate" onClick={handleClose}></div>
				<ModalContainer className="appearance-animate">{children}</ModalContainer>
			</ModalContext.Provider>
		)
	);
};
