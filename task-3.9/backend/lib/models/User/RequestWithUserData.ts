import { Request } from 'express';
import { UserDto } from './UserDto';

export interface RequestWithUserData extends Request {
	user: UserDto;
}
