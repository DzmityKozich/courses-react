import { CalendarEventAdminModal } from 'features/CalendarEventAdminModal';
import React, { useCallback, useState } from 'react';
import { Button, PlusIcon } from 'shared/ui-kit';

type Props = {};

export const CreateEventButton: React.FC<Props> = () => {
	const [open, setOpen] = useState(false);

	const toggleModal = useCallback(() => {
		setOpen((value) => !value);
	}, []);

	return (
		<>
			<Button color="primary" startIcon={<PlusIcon color="inherit" />} onClick={toggleModal} block>
				Create
			</Button>
			<CalendarEventAdminModal open={open} onClose={toggleModal} />
		</>
	);
};
