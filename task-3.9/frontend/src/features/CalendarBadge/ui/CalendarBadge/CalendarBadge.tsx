import { Calendar } from 'entities/Calendar';
import React, { useMemo } from 'react';
import { useCalendarList } from 'entities/Calendar';

import './CalendarBadge.scss';

type Props = {
	calendar?: Calendar;
	id?: string;
};

export const CalendarBadge: React.FC<Props> = ({ calendar, id }) => {
	const { calendarList } = useCalendarList();

	const view = useMemo(() => {
		if (!calendar) {
			return calendarList.find((c) => c.id === id);
		}
		return calendar;
	}, [calendar, id, calendarList]);

	return view ? (
		<div className="w-full flex flex-row gap-2 items-center">
			<div className="calendarColorBox" style={{ backgroundColor: view.color }}></div>
			<div>{view.title}</div>
		</div>
	) : (
		<div className="skeleton-loading w-4/12 h-6"></div>
	);
};
