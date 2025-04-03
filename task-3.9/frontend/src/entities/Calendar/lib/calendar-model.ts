import { Calendar } from 'entities/Calendar/model/Calendar';
import { CalendarStoreModel, CalendarDto } from '../model/calendar-types';

export const convertCalendarToStoreModel = (calendar: Calendar): CalendarStoreModel => {
	const { color, id, isActive, isDefault, title } = calendar;
	return { color, id, isActive, isDefault, title };
};

export const convertStoreModelToCalendar = (model: CalendarStoreModel): Calendar => {
	const { color, id, isActive, isDefault, title } = model;
	return new Calendar(title, color, isActive, isDefault, id);
};

export const convertCalendarToDto = (calendar: Calendar): CalendarDto => {
	const { color, id, isDefault, title } = calendar;
	return { color, id, isDefault, title };
};

export const convertDtoToCalendar = (calendarDto: CalendarDto): Calendar => {
	const { color, id, isDefault, title } = calendarDto;
	return new Calendar(title, color, true, isDefault, id);
};

export const convertDtoToStoreModel = (dto: CalendarDto): CalendarStoreModel => {
	const { color, id, isDefault, title } = dto;
	return { color, id, isActive: true, isDefault, title };
};

export const convertStoreModelToDto = (model: CalendarStoreModel): CalendarDto => {
	const { color, id, isDefault, title } = model;
	return { color, id, isDefault, title };
};
