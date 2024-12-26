import { User, UserDto } from '../../../models/User';
import { FirebaseConvertor } from './types';

export const userConvertor: FirebaseConvertor<User, UserDto> = {
	fromFirestore: (snapshot) => {
		const { email, id, name, photo } = snapshot.data();
		return new User(id, name, email, photo);
	},
	toFirestore: (user) => {
		const { email, id, name, photo } = user;
		console.dir({ ...user }, 100);
		return { ...user };
	},
};
