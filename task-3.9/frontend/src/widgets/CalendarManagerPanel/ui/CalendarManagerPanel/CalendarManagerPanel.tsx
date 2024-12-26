import React from 'react';
import { useSelectedDate } from 'entities/CalendarDate';
import { CalendarList } from '../CalendarList';
import { Datepicker } from 'shared/ui-kit/Datepicker';
import { useCalendarList } from 'entities/Calendar';
import { CreateEventButton } from './CreateEventButton';

export const CalendarManagerPanel: React.FC = () => {
	const { calendarList } = useCalendarList();
	const { selectedDate, selectDate } = useSelectedDate();

	return (
		<div className="flex flex-col items-center mx-auto w-[288px] gap-4">
			<CreateEventButton />

			<Datepicker selectDate={selectDate} defaultDate={selectedDate.toDate()} />

			<CalendarList calendarList={calendarList} />
		</div>
	);
};
