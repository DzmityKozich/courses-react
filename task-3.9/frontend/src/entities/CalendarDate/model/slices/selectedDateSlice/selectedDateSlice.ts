import { createSlice } from '@reduxjs/toolkit';

export const selectedDateSlice = createSlice({
	name: 'selectedDate',
	initialState: {
		value: Date.now(),
	},
	reducers: {
		setDate: (state, actions) => {
			state.value = actions.payload;
		},
		next: (state) => {
			const currentDate = new Date(state.value);
			const tomorrow = new Date(state.value);
			tomorrow.setDate(currentDate.getDate() + 1);
			state.value = tomorrow.valueOf();
		},
		previous: (state) => {
			const currentDate = new Date(state.value);
			const yesterday = new Date(state.value);
			yesterday.setDate(currentDate.getDate() - 1);
			state.value = yesterday.valueOf();
		},
		today: (state) => {
			state.value = Date.now();
		},
	},
});

export const selectedDateReducer = selectedDateSlice.reducer;
export const { setDate, next, previous, today } = selectedDateSlice.actions;
