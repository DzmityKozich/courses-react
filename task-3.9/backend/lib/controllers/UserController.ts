import { RequestHandler } from 'express';
import { UserFirebaseRepository } from '../repositories/user/UserFirebaseRepository';
import { RequestWithUserData, User } from '../models/User';
import { CalendaFirebaseRepository } from '../repositories/calendar/CalendarFirebaseRepository';
import { Calendar } from '../models/Calendar';

export class UserController {
	private repo = new UserFirebaseRepository();
	private calendarRepo = new CalendaFirebaseRepository();

	public getUser: RequestHandler = async (req, res) => {
		try {
			const { id } = (req as RequestWithUserData).user;
			const user = await this.repo.getUser(id);
			if (user) {
				res.status(200).send(user);
			} else {
				res.status(404).send({ message: 'User not found' });
			}
		} catch (error) {
			console.error('Error getting user', error);
			res.status(500).send('Internal server error');
		}
	};

	public saveUser: RequestHandler = async (req, res) => {
		try {
			const { email, id, name, photo } = (req as RequestWithUserData).user;
			const user = new User(id, name, email, photo);
			await this.repo.saveUser(user);
			res.status(200).send(user);
		} catch (error) {
			console.error('Error saving user', error);
			res.status(500).send('Internal server error');
		}
	};

	public checkUserProfile: RequestHandler = async (req, res) => {
		try {
			const { email, id, name, photo } = (req as RequestWithUserData).user;
			const user = await this.repo.getUser(id);
			if (user) {
				return res.status(200).send({ message: 'User profile exist' });
			}

			const profile = new User(id, name, email, photo);
			const calendar = new Calendar(`${id}_default`, 'Calendar', '#9F2957', true, id);
			await this.repo.saveUser(profile);
			await this.calendarRepo.saveCalendar(calendar);
			res.status(201).send({ message: 'User profile created' });
		} catch (error) {
			console.error('Error checking user profile', error);
			res.status(500).send('Internal server error');
		}
	};
}
