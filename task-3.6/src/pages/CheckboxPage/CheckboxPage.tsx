import React from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { Checkbox } from '../../ui-kit/Checkbox';
import { PageTitle } from '../../components/PageTitle';

export const CheckboxPage: React.FC = () => {
	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Checkbox</PageTitle>

				<div className="flex flex-col items-center">
					<div className="plaseholder"></div>
					<div className="">
						<Checkbox id="1" />
						<Checkbox id="2" checked />

						<Checkbox label="Text" id="3" />

						<Checkbox id="4" label="Disabled" disabled />

						<Checkbox id="4" label="Disabled & Checked" disabled checked />
					</div>
					<div className="plaseholder"></div>
				</div>
			</PageLayout>
		</ThemeContainer>
	);
};
