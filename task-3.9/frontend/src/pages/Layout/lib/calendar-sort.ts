import { Calendar } from 'entities/Calendar/model/Calendar';

export const sortCalendars = (calendars: Calendar[]): Calendar[] => {
	const copy = [...calendars];
	if (!copy.length) return copy;
	const index = calendars.findIndex(({ isDefault }) => isDefault);
	const [defaultCalendar] = copy.splice(index, 1);
	const sorted = copy.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});
	return [defaultCalendar, ...sorted];
};
