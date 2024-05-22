import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import './StoreLink.scss';

type Props = {
	children?: ReactNode;
	to: string;
	disabled?: boolean;
};

export const StoreLink: React.FC<Props> = ({ to, children, disabled }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => {
				const activeClass = isActive ? 'activeLink' : '';
				const disabledClass = disabled ? 'disabled' : '';
				return `${activeClass} ${disabledClass}`;
			}}
			tabIndex={disabled ? -1 : 0}
		>
			<div className="storeLink">{children}</div>
		</NavLink>
	);
};
