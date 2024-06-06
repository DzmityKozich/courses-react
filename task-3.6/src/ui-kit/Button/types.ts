import { ReactNode } from 'react';
import { Colors } from '../../themes/types';

export type KitButtonProps = {
	color: Colors;
	startIcon?: ReactNode;
	children?: ReactNode;
	endIcon?: ReactNode;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & KitButtonProps;
