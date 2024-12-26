import React from 'react';
import { CalendarEventAdminModalPprovider } from '../../model/CalendarEventAdminModalContext';
import { AdminModal } from '../AdminModal';
import { CalendarEventAdminModalProps } from '../../model/CalendarEventAdminModalProps';

export const CalendarEventAdminModal: React.FC<CalendarEventAdminModalProps> = ({ event, onClose, open }) => {
	return (
		<CalendarEventAdminModalPprovider>
			<AdminModal onClose={onClose} open={open} event={event} />
		</CalendarEventAdminModalPprovider>
	);
};
