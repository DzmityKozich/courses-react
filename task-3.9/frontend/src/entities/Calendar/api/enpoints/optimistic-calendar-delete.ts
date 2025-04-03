import { Calendar } from 'entities/Calendar/model/Calendar';
import { CalendarEndpointBuilder } from './types';
import { toSpliced } from 'shared/lib';

const queryStarted =
	(api: () => any) =>
	async (calendar: Calendar, { dispatch, queryFulfilled }: any) => {
		const result = dispatch(
			api().util.updateQueryData('getCalendarList', calendar, (calendarList: any[]) => {
				const index = calendarList.findIndex(({ id }) => id === calendar.id);
				if (index < 0) {
					[...calendarList];
				} else {
					toSpliced(calendarList, index, 1);
				}
			})
		);

		queryFulfilled.catch(result.undo);
	};

export const createOptimisticCalendarDeleteEndpoint = (builder: CalendarEndpointBuilder, getApi: () => any) => {
	// const api = getApi();

	return builder.mutation<boolean, Calendar>({
		query: (calendar) => ({
			url: `/${calendar.id}`,
			method: 'DELETE',
		}),
		onQueryStarted: queryStarted(getApi),
	});
};
