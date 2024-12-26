import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { setCalendars, addCalendar, updateCalendar } from '../slices/calendarListSlice';
import { useCallback, useMemo } from 'react';
import { Calendar } from 'entities/Calendar';
import { convertCalendarToStoreModel, convertStoreModelToCalendar } from '../../lib/calendar-model';

export const useCalendarList = () => {
	const calendars = useAppSelector((state) => state.calendarList.calendarList);
	const dispatch = useAppDispatch();

	const calendarList = useMemo(() => {
		return calendars.map(convertStoreModelToCalendar);
	}, [calendars]);

	const setCalendarList = useCallback(
		(list: Calendar[]) => {
			dispatch(setCalendars(list.map(convertCalendarToStoreModel)));
		},
		[dispatch]
	);

	const createCalendar = useCallback(
		(calendar: Calendar) => {
			dispatch(addCalendar(convertCalendarToStoreModel(calendar)));
		},
		[dispatch]
	);

	const modifyCalendar = useCallback(
		(calendar: Calendar) => {
			dispatch(updateCalendar(convertCalendarToStoreModel(calendar)));
		},
		[dispatch]
	);

	return { calendarList, setCalendarList, createCalendar, modifyCalendar };
};
