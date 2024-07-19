import React, { ReactNode } from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
	padding-top: 0.75rem;
	border-top: 1px #dedfe5 solid;
`;

type Props = {
	children: ReactNode[] | ReactNode;
};

export const ModalFooter: React.FC<Props> = ({ children }) => {
	return <FooterDiv>{children}</FooterDiv>;
};
