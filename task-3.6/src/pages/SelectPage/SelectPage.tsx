import React from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { PageTitle } from '../../components/PageTitle';
import { Select } from '../../ui-kit/Select';
import { MenuItem } from '../../ui-kit/MenuItem';

export const SelectPage: React.FC = () => {
	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Select</PageTitle>

				<Select>
					<MenuItem value={1}>1</MenuItem>
					<MenuItem value={2}>2</MenuItem>
					<MenuItem value={3}>3</MenuItem>
				</Select>
			</PageLayout>
		</ThemeContainer>
	);
};
