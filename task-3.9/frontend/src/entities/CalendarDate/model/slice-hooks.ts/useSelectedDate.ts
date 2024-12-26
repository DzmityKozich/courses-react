import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { useCallback, useMemo } from 'react';
import { CalendarDate } from 'entities/CalendarDate';
import { next, previous, setDate, today } from '../slices/selectedDateSlice';

export const useSelectedDate = () => {
	const date = useAppSelector((state) => state.selectedDate.value);
	const dispatch = useAppDispatch();

	const selectedDate = useMemo(() => {
		return new CalendarDate(date);
	}, [date]);

	const selectDate = useCallback((date: Date) => {
		dispatch(setDate(date.valueOf()));
	}, []);

	const nextDate = useCallback(() => {
		dispatch(next());
	}, [dispatch]);

	const previousDate = useCallback(() => {
		dispatch(previous());
	}, [dispatch]);

	const toToday = useCallback(() => {
		dispatch(today());
	}, [dispatch]);

	return { selectedDate, selectDate, nextDate, previousDate, toToday };
};
