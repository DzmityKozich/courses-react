import React, { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import './StoreLinkBtn.scss';

type Props = NavLinkProps & {
	badgeContent?: string;
	children?: ReactNode;
	icon?: ReactNode;
};

export const StoreLinkBtn: React.FC<Props> = ({ to, children, icon, badgeContent }) => {
	return (
		<NavLink to={to}>
			<div className="storeLinkBtn">
				{icon}
				{children}

				{badgeContent && <div className="linkBadge">{badgeContent}</div>}
			</div>
		</NavLink>
	);
};
