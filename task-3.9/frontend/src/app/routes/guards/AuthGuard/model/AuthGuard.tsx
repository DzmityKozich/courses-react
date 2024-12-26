import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from 'shared/auth';
import { useToastContext } from 'shared/ui-kit';

type Props = {
	component: ReactNode;
	loadingComponent?: ReactNode;
};

export const AuthGuard: React.FC<Props> = ({ component, loadingComponent }) => {
	const [status, setStatus] = useState(false);
	const navigate = useNavigate();
	const { showToast } = useToastContext();

	useEffect(() => {
		authService
			.getUserProfile()
			.then((user) => {
				if (user) {
					setStatus(true);
				} else {
					setStatus(false);
					navigate('/login');
				}
			})
			.catch((err) => {
				console.error(err);
				setStatus(false);
				navigate('/login');
				showToast('Can not get user!');
			});
	}, [component]);

	return status ? <>{component}</> : <>{loadingComponent}</>;
};
