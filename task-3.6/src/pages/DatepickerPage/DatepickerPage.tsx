import React from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { PageTitle } from '../../components/PageTitle';
import { Datepicker } from '../../ui-kit/Datepicker';

export const DatepickerPage: React.FC = () => {
	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Datepicker</PageTitle>

				<Datepicker />
			</PageLayout>
		</ThemeContainer>
	);
};
