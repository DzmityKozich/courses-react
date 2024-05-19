import React, { ReactNode, useMemo } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classNames';

import './StoreLinkBtn.scss';

type Props = NavLinkProps & {
	badgeContent?: string;
	children?: ReactNode;
	icon?: ReactNode;
	disabled?: boolean;
};

export const StoreLinkBtn: React.FC<Props> = ({ to, children, icon, badgeContent, disabled }) => {
	const toLink = useMemo(() => {
		return disabled ? '' : to;
	}, [disabled, to]);

	return (
		<NavLink to={toLink}>
			<div className={classNames('storeLinkBtn', { disabled })}>
				{icon}
				{children}

				{badgeContent && <div className="linkBadge">{badgeContent}</div>}
			</div>
		</NavLink>
	);
};
