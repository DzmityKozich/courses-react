import { createContext } from 'react';
import { ToastTrigger } from '../services/ToastTrigger';

type ToastContextProps = {
	toastTrigger: ToastTrigger;
};

export const ToastContext = createContext<ToastContextProps>({ toastTrigger: new ToastTrigger() });
