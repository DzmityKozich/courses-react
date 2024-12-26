import React, { ReactNode, useContext } from 'react';
import { CloseIcon } from '../icons';
import { IconBtn } from '../IconBtn';
import { ModalContext } from '.';
import { ModalHeaderContainer } from './styled-components';

type Props = {
	children: ReactNode;
};

export const ModalHeader: React.FC<Props> = ({ children }) => {
	const { onClose } = useContext(ModalContext);

	return (
		<ModalHeaderContainer>
			{children}
			<IconBtn icon={<CloseIcon color="inherit" />} onClick={onClose} />
		</ModalHeaderContainer>
	);
};
