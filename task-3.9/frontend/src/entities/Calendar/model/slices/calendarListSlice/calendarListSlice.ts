import { createSlice } from '@reduxjs/toolkit';
import { CalendarStoreModel } from '../../calendar-types';

const initialState: { calendarList: CalendarStoreModel[] } = { calendarList: [] };

export const calendarListSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		setCalendars: (state, actions) => {
			state.calendarList = actions.payload;
		},
		addCalendar: (state, actions) => {
			state.calendarList = [...state.calendarList, actions.payload];
		},
		updateCalendar: (state, actions) => {
			const index = state.calendarList.findIndex(({ id }) => actions.payload.id === id);
			if (index > -1) {
				state.calendarList.splice(index, 1, actions.payload);
			}
		},
	},
});

export const calendaListReducer = calendarListSlice.reducer;
export const { setCalendars, addCalendar, updateCalendar } = calendarListSlice.actions;
