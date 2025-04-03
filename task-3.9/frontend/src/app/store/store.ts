import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { calendaListReducer } from 'entities/Calendar';
import { calendarApi } from 'entities/Calendar/api/calendar-api';
import { selectedDateReducer } from 'entities/CalendarDate';

export const store = configureStore({
	reducer: {
		selectedDate: selectedDateReducer,
		calendarList: calendaListReducer,
		[calendarApi.reducerPath]: calendarApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(calendarApi.middleware),
});

setupListeners(store.dispatch);
