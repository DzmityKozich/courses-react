import { CalendarEvent } from 'entities/CalendarEvent';

export type CalendarEventAdminModalProps = {
	open: boolean;
	onClose: (event?: CalendarEvent) => void;
	event?: CalendarEvent;
};
