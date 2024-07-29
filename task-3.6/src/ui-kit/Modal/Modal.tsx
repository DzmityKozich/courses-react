import React, { ReactNode } from 'react';
import { ModalContext } from './ModalContext';
import { useModal } from './useModal';
import { useEscKeydown } from '../hooks/useEscKeydown';

import './Modals.scss';
import { ModalContainer } from './styled-components';

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
				<div className="backdrop appearance-animate" onClick={handleClose} role="backdrop"></div>
				<ModalContainer className="appearance-animate">{children}</ModalContainer>
			</ModalContext.Provider>
		)
	);
};
