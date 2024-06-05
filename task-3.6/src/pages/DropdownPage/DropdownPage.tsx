import React from 'react';
import { PageDescription, PageLayout } from '../../share';
import { PageTitle } from '../../components/PageTitle';
import { Dropdown } from '../../ui-kit/Dropdown';
import { Menu } from '../../ui-kit/Menu';
import { MenuItem } from '../../ui-kit/MenuItem/MenuItem';
import { DropdownButton } from '../../ui-kit/DropdownButton/DropdownButton';

export const DropdownPage: React.FC = () => {
	return (
		<PageLayout>
			<PageTitle>Dropdown</PageTitle>

			<PageDescription>
				You can close this Dropdown with <kbd>Esc</kbd> button and by click outside of menu element
			</PageDescription>

			<div className="flex justify-center">
				<Dropdown>
					<DropdownButton color="secondary">Click Me!</DropdownButton>
					<Menu>
						<MenuItem
							onClick={() => {
								console.log('first item');
							}}
						>
							lorem12
						</MenuItem>
						<MenuItem
							onClick={() => {
								console.log('second item');
							}}
						>
							2
						</MenuItem>
						<MenuItem
							onClick={() => {
								console.log('3th item');
							}}
						>
							3
						</MenuItem>
					</Menu>
				</Dropdown>
			</div>
		</PageLayout>
	);
};
