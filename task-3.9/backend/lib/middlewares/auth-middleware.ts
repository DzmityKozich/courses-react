import { RequestHandler } from 'express';
import { firebase } from '../features/firebase';
import { RequestWithUserData, UserDto } from '../models/User';

export const authMiddleware: RequestHandler = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).send({ message: 'No token provided' });
	}

	const [bearer, token] = authHeader.split(' ');
	if (!token || bearer !== 'Bearer') {
		res.status(401).send({ message: 'Invalid token' });
	}

	firebase
		.auth()
		.verifyIdToken(token)
		.then((data) => {
			const userData: UserDto = { email: data.email || '', id: data.uid, name: data.name, photo: data.picture || '' };
			(req as RequestWithUserData).user = userData;
			next();
		})
		.catch((err) => {
			console.error(err);
			res.status(401).send({ message: 'Could not authorize' });
		});
};
