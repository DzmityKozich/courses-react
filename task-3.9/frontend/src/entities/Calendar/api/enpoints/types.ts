import { Api, BaseQueryFn, EndpointBuilder, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type CalendarEndpointBuilder = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, string, 'calendarApi'>;

export type CalendarApi = Api<BaseQueryFn<string | FetchArgs, any, FetchBaseQueryError>, any, 'calendarApi', 'CALENDARS'>;
