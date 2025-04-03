import { Calendar } from 'entities/Calendar/model/Calendar';
import { CalendarEndpointBuilder } from './types';
import { convertCalendarToDto, convertDtoToCalendar } from 'entities/Calendar/lib/calendar-model';
import { CalendarDto } from 'entities/Calendar/model/calendar-types';
import { toSpliced } from 'shared/lib';

export const calendarMutationQuery = (calendar: Calendar) => ({
	url: '',
	method: 'POST',
	body: convertCalendarToDto(calendar),
});

export const calendarMutationTransformResponse = (result: CalendarDto) => convertDtoToCalendar(result);

const queryStarted =
	(api: any) =>
	async (calendar: Calendar, { dispatch, queryFulfilled }: any) => {
		const result = dispatch(
			api().util.updateQueryData('getCalendarList', calendar, (calendarList: any[]) => {
				const index = calendarList.findIndex(({ id }) => id === calendar.id);
				if (index < 0) {
					[...calendarList, calendar];
				} else {
					toSpliced(calendarList, index, 1, calendar);
				}
			})
		);

		queryFulfilled.catch(result.undo);
	};

export const createOptimisticCalendarMutationEndpoint = (builder: CalendarEndpointBuilder, getApi: () => any) => {
	return builder.mutation<Calendar, Calendar>({
		query: (calendar) => ({
			url: '',
			method: 'POST',
			body: convertCalendarToDto(calendar),
		}),
		transformResponse: (result: CalendarDto) => convertDtoToCalendar(result),
		onQueryStarted: queryStarted(getApi),
	});
};
