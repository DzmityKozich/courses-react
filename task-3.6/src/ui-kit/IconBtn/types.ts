import React, { ReactNode } from 'react';

export type KitIconButtonProps = {
	icon: ReactNode;
};

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & KitIconButtonProps;
