import { useMemo } from 'react';
import { useCalendarList } from 'entities/Calendar';

export const useEventColor = (calendarId: string) => {
	const { calendarList } = useCalendarList();

	const color = useMemo(() => {
		return calendarList.find(({ id }) => id === calendarId)?.color || '#00ae1c';
	}, [calendarList, calendarId]);

	return { color };
};
