import { useState } from 'react';
import { PageTitle } from '../../components/PageTitle';
import { PageLayout, ThemeContainer } from '../../share';
import { Button } from '../../ui-kit';
import { Modal } from '../../ui-kit/Modal';

export const ModalPage: React.FC = () => {
	const [open, setOpen] = useState(false);

	const toggleModal = () => {
		setOpen((prevValue) => !prevValue);
	};

	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Modal</PageTitle>

				<Button color="secondary" onClick={toggleModal}>
					Open modal
				</Button>

				<Modal open={open}></Modal>
			</PageLayout>
		</ThemeContainer>
	);
};
