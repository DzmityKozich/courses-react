import React from 'react';
import { Button } from 'shared/ui-kit';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'shared/ui-kit/Modal';

type Props = {
	isOpen: boolean;
	close: (remove?: boolean) => void | Promise<void>;
	message: string;
	header: string;
};

export const ConfirmDeleteModal: React.FC<Props> = ({ close, isOpen, message, header }) => {
	return (
		<Modal onClose={() => close(false)} open={isOpen}>
			<ModalHeader>{header}</ModalHeader>
			<ModalBody>{message}</ModalBody>
			<ModalFooter>
				<div className="flex flex-row-reverse gap-2">
					<Button color="primary" onClick={() => close(true)}>
						Delete
					</Button>
					<Button color="secondary" onClick={() => close(false)}>
						Cancel
					</Button>
				</div>
			</ModalFooter>
		</Modal>
	);
};
