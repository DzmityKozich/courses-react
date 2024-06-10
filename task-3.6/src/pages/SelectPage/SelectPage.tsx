import React from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { PageTitle } from '../../components/PageTitle';
import { Select } from '../../ui-kit/Select';

export const SelectPage: React.FC = () => {
	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Select</PageTitle>

				<Select />
			</PageLayout>
		</ThemeContainer>
	);
};
