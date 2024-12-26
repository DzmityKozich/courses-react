import { Calendar } from 'entities/Calendar';
import { ConfirmDeleteModal, useConfirmDeleteModal } from 'features/ConfirmDeleteModal';
import React from 'react';
import { IconBtn } from 'shared/ui-kit';
import { DeleteIcon } from 'shared/ui-kit/icons/DeleteIcon';

type Props = {
	calendar: Calendar;
	onClose: (calendar?: Calendar) => void;
};

export const DeleteCalendarButton: React.FC<Props> = ({ calendar, onClose }) => {
	const { close: closeModal, isOpen: isModalOpen, message, open: openModal } = useConfirmDeleteModal();

	const openDeleteModal = () => {
		openModal(`Are you sure you want to delete ${calendar.title}? You'll no longer have access to this calendar and its events.`);
	};

	const closeDeleteModal = (remove?: boolean) => {
		onClose(remove ? calendar : undefined);
		closeModal();
	};

	return (
		<>
			<IconBtn icon={<DeleteIcon color="inherit" />} onClick={() => openDeleteModal()} />
			<ConfirmDeleteModal close={(remove) => closeDeleteModal(remove)} header="Delete Calendar" isOpen={isModalOpen} message={message} />
		</>
	);
};
