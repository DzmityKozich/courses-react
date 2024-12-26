import React, { ReactNode } from 'react';
import { ModalBodyContainer } from './styled-components';

type Props = {
	children: ReactNode[] | ReactNode;
	className?: string;
};

export const ModalBody: React.FC<Props> = ({ children, className }) => {
	return <ModalBodyContainer className={className}>{children}</ModalBodyContainer>;
};
