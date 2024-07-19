import { useCallback } from 'react';

export const useModal = (onClose: () => void) => {
	const handleClose = useCallback(() => {
		onClose();
	}, [onClose]);

	return { handleClose };
};
