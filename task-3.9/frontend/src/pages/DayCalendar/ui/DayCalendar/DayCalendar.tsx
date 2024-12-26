import React, { useEffect } from 'react';
import { hours } from '../../lib/hours';
import { useSelectedDate } from 'entities/CalendarDate';
import { useDateEventsQuery } from '../../model/useDateEventsQuery';
import { EventCard } from 'widgets/EventCard';
import { TimeLine } from 'features/TimeLine';
import { useCalendarList } from 'entities/Calendar';
import { Outlet, useParams } from 'react-router-dom';
import { userCalendaEventFilters } from '../../model/userCalendaEventFilters';

import './DayCalendar.scss';

export const DayCalendar: React.FC = () => {
	const { selectedDate, selectDate } = useSelectedDate();
	const { calendarList } = useCalendarList();
	const { events } = useDateEventsQuery({ selectedDate, calendars: calendarList });
	const { allDayEvents, configuredEvents } = userCalendaEventFilters({ calendars: calendarList, events: events || [] });
	const { date } = useParams();

	useEffect(() => {
		if (date) {
			selectDate(new Date(date));
		}
	}, [date]);

	return (
		<>
			<div className="dayView">
				<div className="dayHeader">
					<div className="headerPlaceholder"></div>

					<div className="dayHeaderInner">
						<div className="dayMarker">
							<div className="date">{selectedDate.date}</div>
							<div className="day">{selectedDate.day.shortForm}</div>
						</div>

						{allDayEvents?.map((event) => (
							<EventCard event={event} key={event.id} />
						))}
					</div>
				</div>

				<div className="overflow-auto">
					<div className="dayTable">
						<div className="dayLayout">
							{hours.map((hour) => (
								<div key={hour} className="hourInterval">
									<span className="value">{!!hour && hour}</span>
								</div>
							))}
						</div>

						<div className="dayEvents">
							<TimeLine />

							{hours.map((hour) => (
								<div className="hourInterval w-full border-b" key={hour}></div>
							))}

							{configuredEvents?.map(({ event, settings }) => (
								<EventCard event={event} key={event.id} settings={settings} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
};
