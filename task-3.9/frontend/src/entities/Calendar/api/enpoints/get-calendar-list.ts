import { QUERIES } from 'shared/lib';
import { CalendarEndpointBuilder } from './types';
import { convertDtoToCalendar, convertDtoToStoreModel } from 'entities/Calendar/lib/calendar-model';
import { CalendarDto, CalendarStoreModel } from 'entities/Calendar/model/calendar-types';

const { CALENDARS } = QUERIES;

const providesTags = (result: CalendarDto[] | undefined) => {
	if (result) {
		return [...result.map(({ id }) => ({ type: CALENDARS, id })), { type: CALENDARS, id: 'LIST' }];
	}
	return [{ type: CALENDARS, id: 'LIST' }];
};

export const createCalendarListEndpoint = (build: CalendarEndpointBuilder) => {
	return build.query<CalendarStoreModel[], void>({
		query: () => '',
		providesTags,
		transformResponse: (result: CalendarDto[]) => result.map(convertDtoToStoreModel),
	});
};
