import express from 'express';
import { CalendarController } from '../controllers/CalendarController';

const router = express.Router();

const controller = new CalendarController();

router.get(`/`, controller.getCalendars);

router.post(`/`, controller.saveCalendar);

router.delete(`/:id`, controller.removeCalendar);

export { router };
