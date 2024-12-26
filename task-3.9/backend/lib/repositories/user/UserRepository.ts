import { User } from '../../models/User';

export interface UserRepository {
	getUser: (userId: string) => Promise<User | null>;
	saveUser: (user: User) => Promise<User>;
}
