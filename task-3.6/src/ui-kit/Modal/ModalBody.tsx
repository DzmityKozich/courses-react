import React, { ReactNode } from 'react';
import { ModalBodyContainer } from './styled-components';

type Props = {
	children: ReactNode[] | ReactNode;
};

export const ModalBody: React.FC<Props> = ({ children }) => {
	return <ModalBodyContainer>{children}</ModalBodyContainer>;
};
