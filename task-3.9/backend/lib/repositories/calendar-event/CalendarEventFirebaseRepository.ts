import { firebase } from '../../features/firebase';
import { Timestamp } from 'firebase-admin/firestore';
import { CalendarEvent } from '../../models/CalendarEvent';
import { calendarEventConvertor } from '../../share/lib/convertors';
import { CalendarEventRepository } from './CalendarEventRepository';
import { endOfDay, startOfDay } from '../../share/lib/utils';

export class CalendarEventFirebaseRepository implements CalendarEventRepository {
	private readonly COLLECTION = 'calendar-events';

	public getEventsByCalendarId = async (calendarId: string): Promise<CalendarEvent[]> => {
		const { docs } = await firebase
			.firestore()
			.collection(this.COLLECTION)
			.withConverter(calendarEventConvertor)
			.where('calendarId', '==', calendarId)
			.get();
		return docs.map((record) => record.data());
	};

	public getEventsForDayAndCalendar = async (startTime: string, calendarId: string): Promise<CalendarEvent[]> => {
		const date = new Date(startTime);
		const { docs } = await firebase
			.firestore()
			.collection(this.COLLECTION)
			.withConverter(calendarEventConvertor)
			.where('calendarId', '==', calendarId)
			.where('startTime', '>=', Timestamp.fromDate(startOfDay(date)))
			.where('endTime', '<=', Timestamp.fromDate(endOfDay(date)))
			.get();
		return docs.map((doc) => doc.data());
	};

	public getEventsForDayAndCalendars = async (startTime: string, calendarIds: string[]): Promise<CalendarEvent[]> => {
		const date = new Date(startTime);
		const { docs } = await firebase
			.firestore()
			.collection(this.COLLECTION)
			.withConverter(calendarEventConvertor)
			.where('calendarId', 'in', calendarIds)
			.where('startTime', '>=', Timestamp.fromDate(startOfDay(date)))
			.where('endTime', '<=', Timestamp.fromDate(endOfDay(date)))
			.get();
		return docs.map((doc) => doc.data());
	};

	public getEventById = async (id: string): Promise<CalendarEvent | undefined> => {
		const doc = await firebase.firestore().collection(this.COLLECTION).withConverter(calendarEventConvertor).doc(id).get();
		return doc.data();
	};

	public saveEvent = async (event: CalendarEvent): Promise<CalendarEvent> => {
		await firebase.firestore().collection(this.COLLECTION).withConverter(calendarEventConvertor).doc(event.id).set(event);
		return event;
	};

	public removeEvent = async (eventId: string): Promise<boolean> => {
		const ref = firebase.firestore().collection(this.COLLECTION).doc(eventId);
		const doc = await ref.get();
		if (!doc.data()) return false;
		ref.delete();
		return true;
	};

	public async removeEventsByCalendarId(calendarId: string): Promise<boolean> {
		try {
			await firebase.firestore().runTransaction(async (transaction) => {
				const { docs } = await firebase
					.firestore()
					.collection(this.COLLECTION)
					.withConverter(calendarEventConvertor)
					.where('calendarId', '==', calendarId)
					.get();
				docs.forEach((document) => transaction.delete(document.ref));
			});
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}
}
