import React from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { Checkbox } from '../../ui-kit/Checkbox';

export const CheckboxPage: React.FC = () => {
	return (
		<PageLayout>
			<ThemeContainer>
				<Checkbox label="Text" id="1" />

				<Checkbox id="2" />
			</ThemeContainer>
		</PageLayout>
	);
};
