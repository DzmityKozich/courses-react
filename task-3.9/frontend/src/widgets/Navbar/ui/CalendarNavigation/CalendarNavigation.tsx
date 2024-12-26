import React, { useMemo } from 'react';
import { Button, IconBtn, ChevronLeftIcon, ChevronRightIcon } from 'shared/ui-kit';
import { useSelectedDate } from 'entities/CalendarDate';

import './CalendarNavigation.scss';

export const CalendarNavigation: React.FC = () => {
	const { selectedDate, toToday, nextDate, previousDate } = useSelectedDate();

	const formatedDate = useMemo(() => {
		return selectedDate.getFormatedDate('mmmm d, yyyy');
	}, [selectedDate]);

	return (
		<div className="calendarNavigation">
			<Button color="primary" onClick={() => toToday()}>
				Today
			</Button>
			<IconBtn icon={<ChevronLeftIcon color="inherit" />} onClick={() => previousDate()} />
			<IconBtn icon={<ChevronRightIcon color="inherit" />} onClick={() => nextDate()} />
			<div className="selectedDate">{formatedDate}</div>
		</div>
	);
};
