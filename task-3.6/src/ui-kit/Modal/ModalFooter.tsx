import React, { ReactNode } from 'react';
import { ModalFooterContainer } from './styled-components';

type Props = {
	children: ReactNode[] | ReactNode;
};

export const ModalFooter: React.FC<Props> = ({ children }) => {
	return <ModalFooterContainer>{children}</ModalFooterContainer>;
};
