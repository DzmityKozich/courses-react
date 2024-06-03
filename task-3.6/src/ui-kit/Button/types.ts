import { ReactNode } from 'react';
import { Colors } from '../../themes/types';

export type KitButtonProps = {
	color: Colors;
	icon?: ReactNode;
	children?: ReactNode;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & KitButtonProps;
