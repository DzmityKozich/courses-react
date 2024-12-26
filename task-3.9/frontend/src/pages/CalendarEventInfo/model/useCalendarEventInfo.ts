import { useCallback, useState } from 'react';

interface ModalStates {
	infoModalOpen: boolean;
	deleteModalOpen: boolean;
	editModalOpen: boolean;
}

export const useCalendarEventInfo = () => {
	const [states, setStates] = useState<ModalStates>({ deleteModalOpen: false, editModalOpen: false, infoModalOpen: true });

	const toggleInfoModal = useCallback(() => {
		setStates((value) => ({ ...value, infoModalOpen: !value.infoModalOpen }));
	}, []);

	const toggleEditModal = useCallback(() => {
		setStates((value) => ({ ...value, editModalOpen: !value.editModalOpen }));
	}, []);

	const toggleDeleteModal = useCallback(() => {
		setStates((value) => ({ ...value, deleteModalOpen: !value.deleteModalOpen }));
	}, []);

	return { states, toggleDeleteModal, toggleInfoModal, toggleEditModal };
};
