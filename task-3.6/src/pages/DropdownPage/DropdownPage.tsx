import React from 'react';
import { PageLayout } from '../../share';
import { PageTitle } from '../../components/PageTitle';
import { Dropdown } from '../../ui-kit/Dropdown';
import { Menu } from '../../ui-kit/Menu';
import { MenuItem } from '../../ui-kit/MenuItem/MenuItem';
import { DropdownButton } from '../../ui-kit/DropdownButton/DropdownButton';

export const DropdownPage: React.FC = () => {
	return (
		<PageLayout>
			<PageTitle title="Dropdown" />

			<Dropdown>
				<DropdownButton />
				<Menu>
					<MenuItem>1</MenuItem>
					<MenuItem>2</MenuItem>
					<MenuItem>3</MenuItem>
				</Menu>
			</Dropdown>
		</PageLayout>
	);
};
