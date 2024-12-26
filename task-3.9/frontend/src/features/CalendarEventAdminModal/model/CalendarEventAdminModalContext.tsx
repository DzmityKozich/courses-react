import { CalendarEvent } from 'entities/CalendarEvent';
import React, { createContext, ReactNode, useContext, useState } from 'react';

export type CalendarEventAdminModalContextProps = {
	isFormValid: boolean;
	formValue: CalendarEvent | undefined;
	setFormValid: (isValid: boolean) => void;
	setFormValue: (value: CalendarEvent) => void;
};

export const CalendarEventAdminModalContext = createContext<CalendarEventAdminModalContextProps | null>(null);

export const useCalendarEventAdmin = (): CalendarEventAdminModalContextProps => {
	const context = useContext(CalendarEventAdminModalContext);

	if (!context) {
		throw new Error('CalendarEventAdminModalContext required!');
	}

	return context;
};

export const CalendarEventAdminModalPprovider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [valid, setValid] = useState<boolean>(false);
	const [value, setValue] = useState<CalendarEvent>();

	return (
		<CalendarEventAdminModalContext.Provider
			value={{ formValue: value, isFormValid: valid, setFormValid: setValid, setFormValue: setValue }}
		>
			{children}
		</CalendarEventAdminModalContext.Provider>
	);
};
