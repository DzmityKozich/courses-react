import { firebase } from '../../features/firebase';
import { User } from '../../models/User';
import { userConvertor } from '../../share/lib/convertors/user-convertor';
import { UserRepository } from './UserRepository';

export class UserFirebaseRepository implements UserRepository {
	private readonly COLLECTION = 'users';

	constructor() {}

	public async getUser(userId: string): Promise<User | null> {
		const doc = await firebase.firestore().collection(this.COLLECTION).withConverter(userConvertor).doc(userId).get();
		return doc.data() || null;
	}

	public async saveUser(user: User): Promise<User> {
		await firebase.firestore().collection(this.COLLECTION).withConverter(userConvertor).doc(user.id).set(user);
		return user;
	}
}
