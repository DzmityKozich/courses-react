import React, { useState } from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { PageTitle } from '../../components/PageTitle';
import { Datepicker } from '../../ui-kit/Datepicker';

export const DatepickerPage: React.FC = () => {
	const [date, setDate] = useState<Date>(new Date(2024, 3, 15));

	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Datepicker</PageTitle>
				<p className="text-center font-semibold">{date.toDateString()}</p>

				<Datepicker selectDate={(date) => setDate(date)} defaultDate={date} />
			</PageLayout>
		</ThemeContainer>
	);
};
