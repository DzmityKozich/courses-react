import React from 'react';
import { MenuItemProps } from './types';
import { DropdownMenuItem } from './DropdownMenuItem';
import { SelectMenuItem } from './SelectMenuItem';

import './MenuItem.scss';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
	const { value, children, ...others } = props;

	if (value === undefined) {
		return <DropdownMenuItem {...others}>{children}</DropdownMenuItem>;
	} else {
		return (
			<SelectMenuItem value={value} {...others}>
				{children}
			</SelectMenuItem>
		);
	}
};
