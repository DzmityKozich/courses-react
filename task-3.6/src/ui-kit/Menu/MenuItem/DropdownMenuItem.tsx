import React, { useContext } from 'react';
import { DropdownContext } from '../../Dropdown/DropdownContext';
import { ListItem } from './ListItem';
import { MenuItemProps } from './types';

import './MenuItem.scss';

export const DropdownMenuItem: React.FC<MenuItemProps> = (props) => {
	const { children, onClick, ...liProps } = props;

	const context = useContext(DropdownContext);

	const handleClick = (event: any) => {
		onClick?.(event);
		setTimeout(() => {
			context?.toggleState();
		}, 150);
	};

	return (
		<ListItem {...liProps} onClick={handleClick}>
			{children}
		</ListItem>
	);
};
