import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

export interface ToastContextProps {
	message: string;
	showToast: (message: string) => void;
	hideToast: () => void;
}

export const ToastContext = createContext<ToastContextProps | null>(null);

export const useToastContext = () => {
	const toastContext = useContext(ToastContext);

	if (!toastContext) {
		throw new Error('useToastContext has to be used within <ApiContext.Provider>');
	}

	return toastContext;
};

export const ToastContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [message, setMessage] = useState('');

	const showToast = useCallback((message: string) => {
		setMessage(message);
	}, []);

	const hideToast = useCallback(() => {
		setMessage('');
	}, []);

	return <ToastContext.Provider value={{ message, showToast, hideToast }}>{children}</ToastContext.Provider>;
};
