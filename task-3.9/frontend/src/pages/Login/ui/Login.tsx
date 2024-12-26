import React from 'react';
import { GoogleIcon } from 'shared/ui-kit';
import { useLoginWithPopup } from '../model/useLoginWithPopup';
import { Logo } from 'features/Logo';

import './Login.scss';

export const Login: React.FC = () => {
	const { login, loading } = useLoginWithPopup();

	return (
		<div className="flex justify-center items-center h-full">
			<div className="loginCard">
				<Logo size="large" />
				<button className="loginBtn" onClick={login} disabled={loading}>
					<GoogleIcon />
					Continue with Google
				</button>
			</div>
		</div>
	);
};
