import React from 'react';
import { Dropdown } from '../Dropdown';
import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem/MenuItem';
import { SelectInput } from '../SelectInput';

export const Select: React.FC = () => {
	return (
		<Dropdown>
			<SelectInput />
			<Menu>
				<MenuItem>1</MenuItem>
				<MenuItem>2</MenuItem>
				<MenuItem>3</MenuItem>
			</Menu>
		</Dropdown>
	);
};
