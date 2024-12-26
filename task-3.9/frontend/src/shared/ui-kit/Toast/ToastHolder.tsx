import React from 'react';
import { useToastContext } from './ToastContext';
import { Toast } from './Toast';

export const ToastHolder: React.FC = () => {
	const { message, hideToast } = useToastContext();

	return <Toast messge={message} onClose={hideToast} open={!!message} position="bottom-center" />;
};
