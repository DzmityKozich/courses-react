import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { CalendarManagerPanel } from 'widgets/CalendarManagerPanel';
import { useCalendarListQuery, useCalendarListRtkQuery } from '../../model/useCalendarListQuery';
import { useCalendarList } from 'entities/Calendar';
import { ToastHolder } from 'shared/ui-kit';
import { sortCalendars } from '../../lib/calendar-sort';

import './Layout.scss';

export const Layout: React.FC = () => {
	// const { data } = useCalendarListQuery();
	const { data } = useCalendarListRtkQuery();
	const { setCalendarList } = useCalendarList();

	useEffect(() => {
		if (data) {
			setCalendarList(sortCalendars(data) as any[]);
		}
	}, [data]);

	return (
		<div className="layoutPage">
			<Navbar />

			<div className="mainContent">
				<div className="w-[25%] pr-8">
					<CalendarManagerPanel />
				</div>
				<div className="flex-grow-[1]">
					<Outlet />
				</div>
			</div>

			<ToastHolder />
		</div>
	);
};
