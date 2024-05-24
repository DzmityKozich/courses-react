import React, { ReactNode, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import './StoreLink.scss';

type Props = {
	children?: ReactNode;
	to: string;
	disabled?: boolean;
};

export const StoreLink: React.FC<Props> = ({ to, children, disabled }) => {
	const toLink = useMemo(() => {
		return disabled ? '' : to;
	}, [to, disabled]);

	return (
		<NavLink
			to={toLink}
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
