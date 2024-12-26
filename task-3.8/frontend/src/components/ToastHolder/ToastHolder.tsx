import React, { useContext, useEffect, useState } from 'react';
import { Toast } from 'ui-kit';
import { v4 as uuid } from 'uuid';
import { ToastContext } from '../../context/ToastContext';
import { toSpliced } from '../../utils';

type ToastList = { id: string; message: string }[];

export const ToastHolder: React.FC = () => {
	const { toastTrigger } = useContext(ToastContext);

	const [toasts, setToasts] = useState<ToastList>([]);

	const closeToast = (id: string) => {
		setToasts((prevToasts) => {
			const index = prevToasts.findIndex((toast) => toast.id === id);
			return toSpliced(prevToasts, index, 1);
		});
	};

	useEffect(() => {
		toastTrigger.registerToastProvider((message) => {
			setToasts((prevToasts) => [...prevToasts, { message, id: uuid() }]);
		});
	}, [toastTrigger]);

	return toasts.map(({ id, message }) => (
		<Toast messge={message} key={id} open={true} onClose={() => closeToast(id)} position="top-left" />
	));
};
