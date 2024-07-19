import React, { ReactNode, useContext } from 'react';
import { CloseIcon } from '../icons';
import { IconBtn } from '../IconBtn';
import styled, { css } from 'styled-components';
import { ModalContext } from '.';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 1rem;
	border-bottom: 1px #dedfe5 solid;
	font-weight: 700;
	font-size: 1.5rem;

	${({ theme }) => css`
		color: ${theme.defaultStyles.textColor};
	`}
`;

type Props = {
	children: ReactNode;
};

export const ModalHeader: React.FC<Props> = ({ children }) => {
	const { onClose } = useContext(ModalContext);

	return (
		<StyledDiv>
			{children}
			<IconBtn icon={<CloseIcon color="inherit" />} onClick={onClose} />
		</StyledDiv>
	);
};
