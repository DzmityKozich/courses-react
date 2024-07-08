import React, { useState } from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { PageTitle } from '../../components/PageTitle';
import { Select } from '../../ui-kit/Select';
import { MenuItem } from '../../ui-kit/MenuItem';

export const SelectPage: React.FC = () => {
	const [selected, setSelected] = useState(2);

	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Select</PageTitle>

				<Select value={selected} select={(value) => setSelected(value)}>
					<MenuItem value={1}>1</MenuItem>
					<MenuItem value={2}>2</MenuItem>
					<MenuItem value={3}>3</MenuItem>
				</Select>
			</PageLayout>
		</ThemeContainer>
	);
};
