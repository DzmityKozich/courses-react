import { RequestHandler } from 'express';
import { CalendaFirebaseRepository } from '../repositories/calendar/CalendarFirebaseRepository';
import { CalendarEventFirebaseRepository } from '../repositories/calendar-event/CalendarEventFirebaseRepository';
import { RequestWithUserData } from '../models/User';

export class CalendarController {
	private repo = new CalendaFirebaseRepository();
	private eventsRepo = new CalendarEventFirebaseRepository();

	public getCalendars: RequestHandler = async (req, res) => {
		try {
			const userId = (req as RequestWithUserData).user.id;
			const calendars = await this.repo.getCalendars(userId);
			res.status(200).send(calendars);
		} catch (error: any) {
			res.status(500).send();
			console.error(error);
		}
	};

	public saveCalendar: RequestHandler = async (req, res) => {
		try {
			const { color, id, isDefault, title } = await this.repo.saveCalendar(req.body);
			res.status(200).send({ color, id, isDefault, title });
		} catch (error) {
			res.status(500).send();
			console.error(error);
		}
	};

	public removeCalendar: RequestHandler = async (req, res) => {
		try {
			const calendarId = req.params.id;
			const calendar = await this.repo.getCalendarById(calendarId);
			if (!calendar) {
				return res.status(404).send({ message: 'Calendar not found' });
			}

			if (calendar.isDefault) {
				return res.status(403).send({ message: 'Default calendar cannot be removed' });
			}

			const eventsDeleted = await this.removeCalendarEvents(calendarId);
			if (!eventsDeleted) {
				return res.status(500).send({ message: 'Failed to delete calendar events' });
			}

			const calendarRemoved = await this.repo.removeCalendar(calendarId);
			if (!calendarRemoved) {
				return res.status(404).send({ message: 'Failed to remove calendar' });
			}

			res.status(200).send({ message: 'Calendar removed successfully' });
		} catch (error) {
			res.status(500).send();
			res.status(500).send({ message: 'Internal server error' });
		}
	};

	private async removeCalendarEvents(calendarId: string): Promise<boolean> {
		return await this.eventsRepo.removeEventsByCalendarId(calendarId);
	}
}
