import React, { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classNames';

import './StoreLinkBtn.scss';

type Props = NavLinkProps & {
	badgeContent?: string;
	children?: ReactNode;
	icon?: ReactNode;
	disabled?: boolean;
};

export const StoreLinkBtn: React.FC<Props> = ({ to, children, icon, badgeContent, disabled, ...linkProps }) => {
	return (
		<NavLink to={to} {...linkProps} onClick={(event) => (disabled ? event.preventDefault() : true)}>
			<div className={classNames('storeLinkBtn', { disabled })}>
				{icon}
				{children}

				{badgeContent && <div className="linkBadge">{badgeContent}</div>}
			</div>
		</NavLink>
	);
};
