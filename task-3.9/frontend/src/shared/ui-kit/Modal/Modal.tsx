import React, { ReactNode } from 'react';
import { ModalContext } from './ModalContext';
import { useModal } from './useModal';
import { ModalContainer } from './styled-components';
import { Overlay } from '../Overlay';

type Props = {
	open: boolean;
	onClose: () => void;
	children: ReactNode[] | ReactNode;
};

export const Modal: React.FC<Props> = ({ open, onClose, children }) => {
	const { handleClose } = useModal(onClose);

	return (
		open && (
			<Overlay onClose={onClose}>
				<ModalContext.Provider value={{ onClose: handleClose }}>
					<ModalContainer className="appearance-animate">{children}</ModalContainer>
				</ModalContext.Provider>
			</Overlay>
		)
	);
};
