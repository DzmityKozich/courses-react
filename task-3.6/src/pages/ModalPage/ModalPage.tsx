import { useState } from 'react';
import { PageTitle } from '../../share/PageTitle';
import { PageLayout, ThemeContainer } from '../../share';
import { Button } from '../../ui-kit';
import { Modal, ModalFooter, ModalBody, ModalHeader } from '../../ui-kit/Modal';

export const ModalPage: React.FC = () => {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Modal</PageTitle>

				<div className="flex justify-center">
					<Button color="secondary" onClick={openModal}>
						Open modal
					</Button>
				</div>

				<Modal open={open} onClose={closeModal}>
					<ModalHeader>Title</ModalHeader>
					<ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
						in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</ModalBody>
					<ModalFooter>
						<div className="flex flex-row justify-end gap-3">
							<Button color="secondary" onClick={closeModal}>
								Close
							</Button>
						</div>
					</ModalFooter>
				</Modal>
			</PageLayout>
		</ThemeContainer>
	);
};
