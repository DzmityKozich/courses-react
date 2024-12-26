import { Calendar } from 'entities/Calendar';
import { useCallback, useState } from 'react';

export const useCalendarManagerPopup = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);
	const [calendar, setCalendar] = useState<Calendar | null>(null);

	const toggleState = useCallback(() => {
		setIsOpen((value) => !value);
	}, [setIsOpen]);

	const open = useCallback((event: React.MouseEvent, calendar: Calendar) => {
		setTriggerElement(event.target as HTMLElement);
		setCalendar(calendar);
		setIsOpen(true);
	}, []);

	return { isOpen, toggleState, open, triggerElement, calendar };
};
