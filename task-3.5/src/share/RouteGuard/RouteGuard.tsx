import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
	access: boolean;
	children: ReactNode;
	redirectTo?: string;
};

export const RouteGuard: React.FC<Props> = ({ access, children, redirectTo = '/' }) => {
	if (!access) {
		return <Navigate to={redirectTo} replace />;
	}

	return children;
};
