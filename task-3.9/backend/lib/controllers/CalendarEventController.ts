import { RequestHandler } from 'express';
import { CalendarEventFirebaseRepository } from '../repositories/calendar-event/CalendarEventFirebaseRepository';

export class CalendarEventController {
	private repo = new CalendarEventFirebaseRepository();

	public getEventsByCalendarId: RequestHandler = async (req, res) => {
		try {
			const events = await this.repo.getEventsByCalendarId(req.params.calendarId);
			res.status(200).send(events);
		} catch (error) {
			res.status(500).send();
			console.error(error);
		}
	};

	public getEventsForDayAndCalendar: RequestHandler = async (req, res) => {
		try {
			const { date, calendarId } = req.params;
			const events = await this.repo.getEventsForDayAndCalendar(date, calendarId);
			res.status(200).send(events);
		} catch (error) {
			console.error(error);
			res.status(500).send();
		}
	};

	public getEventsForDayAndCalendars: RequestHandler = async (req, res) => {
		try {
			const { calendarIds } = req.body;
			const { date } = req.params;
			const events = await this.repo.getEventsForDayAndCalendars(date, calendarIds);
			res.status(200).send(events);
		} catch (error) {
			console.error(error);
			res.status(500).send();
		}
	};

	public saveEvent: RequestHandler = async (req, res) => {
		try {
			const event = await this.repo.saveEvent(req.body);
			res.status(200).send(event);
		} catch (error) {
			console.error(error);
			res.status(500).send();
		}
	};

	public removeEvent: RequestHandler = async (req, res) => {
		try {
			const result = await this.repo.removeEvent(req.params.id);
			res.status(result ? 200 : 404).send(result);
		} catch (error) {
			console.error(error);
			res.status(500).send();
		}
	};

	public getEventById: RequestHandler = async (req, res) => {
		try {
			const { id } = req.params;
			const result = await this.repo.getEventById(id);
			if (result) {
				res.status(200).send(result);
			} else {
				res.status(404).send();
			}
		} catch (error) {
			res.status(500).send();
		}
	};
}
