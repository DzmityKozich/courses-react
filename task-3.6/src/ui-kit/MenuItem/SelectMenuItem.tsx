import React, { useContext } from 'react';
import { ListItem } from './ListItem';
import { MenuItemProps } from './types';
import { SelectContext } from '../Select/SelectContext';
import classNames from 'classnames';
import { useSelectMenuItem } from './useSelectMenuItem';

export const SelectMenuItem: React.FC<MenuItemProps> = (props) => {
	const { children, value, onClick, ...liProps } = props;

	const context = useContext(SelectContext);
	const { selected } = useSelectMenuItem({ context, value });

	const handleClick = (event: any) => {
		onClick?.(event);
		context?.onSelect?.(value);
		setTimeout(() => {
			context?.toggleState();
		}, 150);
	};

	return (
		<ListItem {...liProps} className={classNames({ selected })} onClick={handleClick}>
			{children}
		</ListItem>
	);
};
