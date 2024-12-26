import { Calendar } from '../../../models/Calendar';
import { FirebaseConvertor } from './types';

export const calendarConvertor: FirebaseConvertor<Calendar> = {
	toFirestore: (calendar) => {
		const { isDefault, color, id, title, userId } = calendar;
		return { isDefault, color, id, title, userId };
	},
	fromFirestore: (shaphot) => {
		const { id, title, color, isDefault, userId } = shaphot.data();
		return new Calendar(id, title, color, isDefault, userId);
	},
};
