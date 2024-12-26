import express from 'express';
import { CalendarEventController } from '../controllers/CalendarEventController';

const router = express.Router();

const controller = new CalendarEventController();

router.get(`/:id`, controller.getEventById);

router.get(`/calendar/:calendarId`, controller.getEventsByCalendarId);

router.post(`/calendars/date/:date`, controller.getEventsForDayAndCalendars);

router.get(`/calendar/:calendarId/date/:date`, controller.getEventsForDayAndCalendar);

router.post(`/`, controller.saveEvent);

router.delete(`/:id`, controller.removeEvent);

export { router };
