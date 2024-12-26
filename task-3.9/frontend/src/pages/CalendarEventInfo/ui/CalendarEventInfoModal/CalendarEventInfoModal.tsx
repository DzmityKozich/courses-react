import { CalendarEvent } from 'entities/CalendarEvent';
import React, { useCallback, useMemo } from 'react';
import { CalendarBadge } from 'features/CalendarBadge';
import { ClockIcon, DescriptionIcon, IconBtn, TitleIcon } from 'shared/ui-kit';
import { CalendarIcon } from 'shared/ui-kit/icons/CalendarIcon';
import { DeleteIcon } from 'shared/ui-kit/icons/DeleteIcon';
import { EditIcon } from 'shared/ui-kit/icons/EditIcon';
import { Modal, ModalBody, ModalHeader } from 'shared/ui-kit/Modal';

import '../../../../common.scss';

type Props = {
	event?: CalendarEvent;
	open: boolean;
	onClose: () => void;
	onEdit: () => void;
	onDelete: () => void;
};

const DASH_SYMBOL = '—';

export const CalendarEventInfoModal: React.FC<Props> = ({ event, open, onClose, onDelete, onEdit }) => {
	const formatedTime = useMemo(() => {
		if (event) {
			const date = event.startTime.getFormatedDate('dddd, mmmm d');
			const startTime = event.startTime.getFormatedDate('shortTime').toLowerCase();
			const endTime = event.endTime.getFormatedDate('shortTime').toLowerCase();
			return `${date} ${startTime} ${DASH_SYMBOL} ${endTime}`;
		}
	}, [event]);

	const handleClose = useCallback(() => {
		onClose();
	}, [onClose]);

	const handleEdit = useCallback(() => {
		onEdit();
	}, [onEdit]);

	const handleDelete = useCallback(() => {
		onDelete();
	}, [onEdit]);

	return (
		<Modal open={open} onClose={handleClose}>
			<ModalHeader>
				<div className="flex justify-between w-full items-center">
					Event Information
					<span className="pb-1">
						<IconBtn icon={<EditIcon color="inherit" />} onClick={handleEdit} disabled={!event} />
						<IconBtn icon={<DeleteIcon color="inherit" />} disabled={!event} onClick={handleDelete} />
					</span>
				</div>
			</ModalHeader>
			<ModalBody className="min-w-[522px]">
				<div className="flex flex-col gap-4">
					<div className="flex flex-row gap-4 items-center">
						<TitleIcon color="inherit" />
						{event ? <h1 className="text-2xl">{event.title}</h1> : <div className="skeleton-loading w-6/12 h-6 rounded-md"></div>}
					</div>

					<div className="flex flex-row gap-4 items-center">
						<ClockIcon color="inherit" />
						{event ? (
							<div className="flex flex-col">
								<p>{formatedTime}</p>
								{event.allDay && <p>All Day</p>}
							</div>
						) : (
							<div className="skeleton-loading w-8/12 h-6 rounded-md"></div>
						)}
					</div>

					<div className="flex flex-row gap-4 items-center">
						<CalendarIcon color="inherit" />
						{event ? <CalendarBadge id={event.calendarId} /> : <div className="skeleton-loading w-4/12 h-6 rounded-md"></div>}
					</div>

					<div className="flex flex-row gap-4 items-center">
						<DescriptionIcon color="inherit" />
						{event ? <p>{event.text}</p> : <div className="skeleton-loading w-8/12 h-12 rounded-md"></div>}
					</div>
				</div>
			</ModalBody>
		</Modal>
	);
};
