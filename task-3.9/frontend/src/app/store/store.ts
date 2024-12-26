import { configureStore } from '@reduxjs/toolkit';
import { calendaListReducer } from 'entities/Calendar';
import { selectedDateReducer } from 'entities/CalendarDate';

export const store = configureStore({
	reducer: {
		selectedDate: selectedDateReducer,
		calendarList: calendaListReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
