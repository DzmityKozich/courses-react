import { Calendar } from '../../models/Calendar';
import { CalendaRepository } from './CalendarRepository';
import { firebase } from '../../features/firebase';
import { calendarConvertor } from '../../share/lib/convertors';

export class CalendaFirebaseRepository implements CalendaRepository {
	private readonly COLLECTION = 'calendars';

	public async getCalendars(userId: string): Promise<Calendar[]> {
		const { docs } = await firebase
			.firestore()
			.collection(this.COLLECTION)
			.where('userId', '==', userId)
			.withConverter(calendarConvertor)
			.get();
		return docs.map((d) => d.data());
	}

	public async saveCalendar(calendar: Calendar): Promise<Calendar> {
		await firebase.firestore().collection(this.COLLECTION).withConverter(calendarConvertor).doc(calendar.id).set(calendar);
		return calendar;
	}

	public async getCalendarById(calendarId: string): Promise<Calendar | null> {
		const doc = await firebase.firestore().collection(this.COLLECTION).withConverter(calendarConvertor).doc(calendarId).get();
		return doc.data() || null;
	}

	public async removeCalendar(calendarId: string): Promise<boolean> {
		const ref = firebase.firestore().collection(this.COLLECTION).doc(calendarId);
		const doc = await ref.get();
		if (!doc.data()) return false;
		ref.delete();
		return true;
	}
}
