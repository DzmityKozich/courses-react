import React, { ReactNode } from 'react';
import { OverlayContainer } from './styled-components';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';

type Props = {
	children: ReactNode;
	onClose: () => void;
	animated?: boolean;
	backdropColor?: string;
};

export const Overlay: React.FC<Props> = ({ children, onClose, animated, backdropColor }) => {
	return createPortal(
		<OverlayContainer>
			<Backdrop onClose={onClose} animated={animated} bgColor={backdropColor}></Backdrop>
			{children}
		</OverlayContainer>,
		document.body
	);
};
