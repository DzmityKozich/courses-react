import React, { ReactNode, useContext } from 'react';
import styled, { css } from 'styled-components';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';
import classNames from 'classnames';

import './MenuItem.scss';
import { MenuItemProps } from './types';
import { DropdownMenuItem } from './DropdownMenuItem';
import { SelectMenuItem } from './SelectMenuItem';

const StyledLi = styled.li`
	padding: 0.45rem;
	cursor: pointer;
	transition: background-color 0.15s ease;

	${({ theme }) => css`
		&:hover {
			background-color: ${theme.defaultStyles.listItemHoverColor};
		}

		&:active {
			background-color: ${theme.defaultStyles.listItemActiveColor};
		}

		&.selected {
			background-color: ${theme.defaultStyles.listItemActiveColor};
		}
	`}
`;

type Props = React.HTMLAttributes<HTMLLIElement> & {
	children: ReactNode;
	value?: any;
};

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

	// const { children, onClick, value, ...liProps } = props;

	// const context = useContext(DropdownContext);

	// const handleClick = (event: any) => {
	// 	onClick?.(event);
	// 	context?.onSelect?.({ value, text: children });
	// 	setTimeout(() => {
	// 		context?.toggleState();
	// 	}, 150);
	// };

	// return (
	// 	<StyledLi
	// 		{...liProps}
	// 		onClick={handleClick}
	// 		className={classNames({ selected: props.value ? context?.selectedValue?.value === props.value : false })}
	// 	>
	// 		{children}
	// 	</StyledLi>
	// );
};
