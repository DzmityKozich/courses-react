import { Calendar } from 'entities/Calendar';
import { CalendarEvent } from 'entities/CalendarEvent';
import { useMemo } from 'react';
import { filterActiveCalendaEvents } from '../lib/event-filters';
import { calculatePositions } from '../lib/date-events-placement';

type Props = {
	events: CalendarEvent[];
	calendars: Calendar[];
};

export const userCalendaEventFilters = ({ calendars, events }: Props) => {
	const { allDayEvents, regularEvents } = useMemo(() => {
		if (!events) return { allDayEvents: [], regularEvents: [] };
		const filtered = filterActiveCalendaEvents(events, calendars);
		const allDayEvents = filtered.filter(({ allDay }) => allDay);
		const regularEvents = filtered.filter(({ allDay }) => !allDay);
		return { allDayEvents, regularEvents };
	}, [events, calendars]);

	const configuredEvents = useMemo(() => {
		return calculatePositions(regularEvents);
	}, [regularEvents]);

	return { allDayEvents, regularEvents, configuredEvents };
};
