import { useCallback, useState } from 'react';

export const useConfirmDeleteModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('');

	const open = useCallback((message: string) => {
		setIsOpen(true);
		setMessage(message);
	}, []);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);

	return { isOpen, open, close, message };
};
