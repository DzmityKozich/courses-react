import { useEffect, useState } from 'react';
import { UserInfo } from 'firebase/auth';
import { useToastContext } from 'shared/ui-kit';
import { authService } from 'shared/auth';

export const useUser = () => {
	const [user, setUser] = useState<UserInfo | null>(null);
	const { showToast } = useToastContext();

	useEffect(() => {
		authService
			.getUserProfile()
			.then((user) => setUser(user))
			.catch((error) => {
				console.error(error);
				showToast('Can not get user!');
			});
	}, []);

	return { user };
};
