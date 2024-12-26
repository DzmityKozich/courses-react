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
		<>
			{disabled && (
				<NavLink to={to} onClick={(event) => event.preventDefault()} className="disabled">
					<div className="storeLink">{children}</div>
				</NavLink>
			)}
			{!disabled && (
				<NavLink
					to={to}
					className={({ isActive }) => {
						return isActive ? 'activeLink' : '';
					}}
				>
					<div className="storeLink">{children}</div>
				</NavLink>
			)}
		</>
	);
};
