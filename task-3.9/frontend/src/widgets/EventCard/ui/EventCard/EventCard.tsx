import React, { useMemo } from 'react';
import { CalendarEvent } from 'entities/CalendarEvent';
import { EventSettings } from '../../model/EventSettings';
import { CSSProperties } from 'styled-components';
import { useEventColor } from '../../model/useEventColors';
import { transparentize } from 'polished';
import { NavLink } from 'react-router-dom';
import { RouteNames } from 'app/routes/constants';
import classNames from 'classnames';

import './EventCard.scss';

type Props = {
	event: CalendarEvent;
	settings?: EventSettings;
};

export const EventCard: React.FC<Props> = ({ event, settings }) => {
	const { color } = useEventColor(event.calendarId);

	const style: CSSProperties = useMemo(() => {
		if (settings) {
			return { position: 'absolute', ...settings.position, ...settings.size };
		}
		return {};
	}, [settings]);

	const bgColor = useMemo(() => {
		return transparentize(0.7, color);
	}, [color]);

	const cardSizeCssClass = useMemo(() => {
		const durationInMins = (event.endTime.valueOf() - event.startTime.valueOf()) / 60000;
		if (durationInMins > 45) return '';
		if (durationInMins === 15) return 'xs';
		return 'sm';
	}, [event]);

	const toLink = useMemo(() => {
		const date = event.startTime.getFormatedDate('yyyy-mm-dd');
		return `${date}/${RouteNames.selectedEvent}/${event.id}`;
	}, [event]);

	return (
		<NavLink className={classNames('eventCard', cardSizeCssClass)} style={{ ...style }} to={toLink}>
			<div className="eventMarker" style={{ backgroundColor: color }}></div>
			<div className="eventCardBody" style={{ backgroundColor: bgColor }}>
				<div className="eventCardHeader">
					<div className="eventTitle">{event.title}</div>
					{!event.allDay && (
						<div className="eventDuration">
							{event.startTime.getShortTime()} - {event.endTime.getShortTime()}
						</div>
					)}
				</div>
			</div>
		</NavLink>
	);
};
