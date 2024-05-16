import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
	children: ReactNode;
	to: string;
};

export const StoreLink: React.FC<Props> = ({ to, children }) => {
	return <NavLink to={to}>{children}</NavLink>;
};
