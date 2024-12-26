import React, { useCallback, useMemo } from 'react';
import { Button } from 'shared/ui-kit';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'shared/ui-kit/Modal';
import { CalendarEventForm } from '../CalendarEventForm';
import { useCalendarEventAdmin } from '../../model/CalendarEventAdminModalContext';
import { useOptimisticCalendarEventMutation } from '../../model/useOptimisticCalendarEventMutation';
import { useCalendarEventMutationStatusToast } from '../../model/useCalendarEventMutationStatusToast';
import { CalendarEventAdminModalProps } from '../../model/CalendarEventAdminModalProps';

export const AdminModal: React.FC<CalendarEventAdminModalProps> = ({ event, onClose, open }) => {
	const { formValue: value, isFormValid: valid } = useCalendarEventAdmin();
	const eventMutationStatusToast = useCalendarEventMutationStatusToast();
	const { mutation: saveCalendar } = useOptimisticCalendarEventMutation({ ...eventMutationStatusToast });

	const title = useMemo(() => {
		return event ? 'Edit event' : 'Create event';
	}, [event]);

	const closeModal = useCallback(() => {
		onClose();
	}, [onClose]);

	const saveEvent = useCallback(async () => {
		if (valid && value) {
			const result = await saveCalendar.mutateAsync(value);
			if (result) {
				onClose(result);
			}
		}
	}, [onClose, value, valid]);

	return (
		<Modal open={open} onClose={closeModal}>
			<ModalHeader>{title}</ModalHeader>

			<ModalBody>
				<CalendarEventForm event={event} />
			</ModalBody>

			<ModalFooter>
				<div className="flex flex-row-reverse">
					<Button color="primary" disabled={!valid} onClick={saveEvent}>
						Save
					</Button>
				</div>
			</ModalFooter>
		</Modal>
	);
};
