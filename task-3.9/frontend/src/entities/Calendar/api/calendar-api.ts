import { createApi } from '@reduxjs/toolkit/query/react';
import { QUERIES } from 'shared/lib';
import { createCalendarListEndpoint } from './enpoints/get-calendar-list';
import { baseQueryWithReauthFactory } from 'shared/api/rtk-query';
import { createOptimisticCalendarMutationEndpoint } from './enpoints/optimistic-calendar-mutation';
import { createOptimisticCalendarDeleteEndpoint } from './enpoints/optimistic-calendar-delete';

export const calendarApi = createApi({
	reducerPath: 'calendarApi',
	baseQuery: baseQueryWithReauthFactory(`${import.meta.env.VITE_API_URL}/calendars`),
	tagTypes: [QUERIES.CALENDARS],
	endpoints: (builder) => ({
		getCalendarList: createCalendarListEndpoint(builder),

		saveCalendarOptimistic: createOptimisticCalendarMutationEndpoint(builder, () => calendarApi),

		deleteCalendarOptimistic: createOptimisticCalendarDeleteEndpoint(builder, () => calendarApi),
	}),
});

export const { useGetCalendarListQuery, useSaveCalendarOptimisticMutation, useDeleteCalendarOptimisticMutation } = calendarApi;
