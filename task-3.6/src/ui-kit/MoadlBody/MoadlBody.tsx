import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	margin: 1rem 0;
`;

type Props = {
	children: ReactNode[] | ReactNode;
};

export const ModalBody: React.FC<Props> = ({ children }) => {
	return <StyledDiv>{children}</StyledDiv>;
};
