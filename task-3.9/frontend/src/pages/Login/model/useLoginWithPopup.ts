import { useCallback, useState } from 'react';
import { authService } from 'shared/auth';
import { useNavigate } from 'react-router-dom';
import { useToastContext } from 'shared/ui-kit';
import { useUserApi } from 'entities/User/api/useUserApi';

export const useLoginWithPopup = () => {
	const { showToast } = useToastContext();
	const navigate = useNavigate();
	const { checkUserProfile } = useUserApi();
	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
		setLoading(true);
		checkUserProfile()
			.then(() => navigate('/day'))
			.catch(() => showToast('Profile check error'))
			.finally(() => setLoading(false));
	};

	const login = useCallback(async () => {
		try {
			const credential = await authService.signInWithPopup();
			if (credential) {
				handleLogin();
			} else {
				console.error(new Error('No credential'));
				showToast('Login error');
			}
		} catch (err) {
			console.error(err);
			showToast('Login error');
		}
	}, []);

	return { login, loading };
};
