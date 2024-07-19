import { forwardRef } from 'react';
import { IconBtn } from '../IconBtn';
import { CloseIcon } from '../icons';

import './Toast.scss';
import { useToast } from './useToast';
import classNames from 'classnames';
import { ToastDiv } from './styled-element';

type Props = {
	messge: string;
	onClose: (event?: React.MouseEvent) => void;
	open: boolean;
	autoHideDuration?: number;
	position?: 'bottom-left' | 'top-left' | 'top-center' | 'top-right' | 'bottom-right' | 'bottom-center';
};

export const Toast = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { messge, open, onClose, autoHideDuration = 3000, position = 'bottom-left' } = props;

	const { appearance } = useToast({ onClose, autoHideDuration, open, position });

	return (
		open && (
			<ToastDiv ref={ref} className={classNames(position, appearance)}>
				{messge}
				<IconBtn icon={<CloseIcon color="inherit" />} style={{ color: 'currentcolor' }} onClick={onClose}></IconBtn>
			</ToastDiv>
		)
	);
});
