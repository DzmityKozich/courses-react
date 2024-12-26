import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCalendarEventInfo } from '../../model/useCalendarEventInfo';
import { CalendarEventInfoModal } from '../CalendarEventInfoModal';
import { useCalendarEventQuery } from '../../model/useCalendarEventQuery';
import { ConfirmDeleteModal } from 'features/ConfirmDeleteModal';
import { useOptimisticCalendaEventDelete } from '../../model/useOptimisticCalendaEventDelete';
import { CalendarEventAdminModal } from 'features/CalendarEventAdminModal';
import { CalendarEvent } from 'entities/CalendarEvent';
import { useDayEventsUpdate } from '../../model/useDayEventsUpdate';
import { useCalendarEventDeleteStatusToast } from '../../model/useCalendarEventDeleteStatusToast';
import { useToastContext } from 'shared/ui-kit';

export const CalendarEventInfo: React.FC = () => {
	const { id = '' } = useParams();
	const { event, refetch, error } = useCalendarEventQuery({ id });
	const { states, toggleDeleteModal, toggleEditModal, toggleInfoModal } = useCalendarEventInfo();
	const deleteStatusToasts = useCalendarEventDeleteStatusToast();
	const { mutation: deleteMutation } = useOptimisticCalendaEventDelete({ ...deleteStatusToasts });
	const { updateDayEvents } = useDayEventsUpdate();
	const navigate = useNavigate();
	const { showToast } = useToastContext();

	const navigateBack = useCallback(() => {
		navigate('../../..', { relative: 'path' });
	}, [navigate]);

	const handleInfoModalClose = useCallback(() => {
		navigateBack();
	}, [navigateBack]);

	const openDeleteModal = useCallback(() => {
		toggleDeleteModal();
	}, [toggleDeleteModal]);

	const openEditModal = useCallback(() => {
		toggleEditModal();
	}, [toggleDeleteModal]);

	const handleDeleteModalClose = useCallback(
		async (remove?: boolean) => {
			toggleDeleteModal();
			if (remove && event) {
				const result = await deleteMutation.mutateAsync(event);
				if (result) {
					navigateBack();
				}
			}
		},
		[event, navigateBack, toggleDeleteModal]
	);

	const handleAdminModalClose = useCallback(
		async (savedEvent?: CalendarEvent) => {
			toggleEditModal();
			if (savedEvent) {
				navigateBack();
				refetch();
				if (!savedEvent.startTime.isSameDate(event!.startTime)) {
					updateDayEvents(event!);
				}
			}
		},
		[toggleEditModal, toggleInfoModal, navigateBack, updateDayEvents, event]
	);

	useEffect(() => {
		if (!event && error?.status === 404) {
			showToast(`Event with id ${id} does not exist.`);
			navigateBack();
		} else if (!event && error?.status === 500) {
			showToast(`Server error`);
			navigateBack();
		} else if (!event && error) {
			showToast(`Something went wrong :(`);
			navigateBack();
		}
	}, [event, error, showToast, navigateBack]);

	return (
		<>
			<CalendarEventInfoModal
				event={event}
				open={states.infoModalOpen}
				onClose={handleInfoModalClose}
				onDelete={openDeleteModal}
				onEdit={openEditModal}
			/>
			;
			<ConfirmDeleteModal
				close={handleDeleteModalClose}
				isOpen={states.deleteModalOpen}
				header="Delete event"
				message={`Are you sure you want to delete ${event?.title}? You'll no longer have access to it.`}
			/>
			<CalendarEventAdminModal onClose={handleAdminModalClose} open={states.editModalOpen} event={event} />
		</>
	);
};
