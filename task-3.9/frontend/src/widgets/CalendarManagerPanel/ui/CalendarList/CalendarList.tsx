import React from 'react';
import { Calendar } from 'entities/Calendar';
import { IconBtn, PlusIcon } from 'shared/ui-kit';
import { Checkbox } from 'shared/ui-kit/Checkbox';
import { EditIcon } from 'shared/ui-kit/icons/EditIcon';
import { CalendarManagerPopup, CalendarForm } from '../CalendarManagerPopup';
import { useCalendarManagerPopup } from '../../model/useCalendarManagerPopup';
import { useOptimisticCalendarMutation } from '../../model/useOptimisticCalendarMutation';
import { useOptimisticCalendarDelete } from '../../model/useOptimisticCalendaDelete';
import { DeleteCalendarButton } from '../DeleteCalendarButton';
import { useCalendarList } from 'entities/Calendar';
import { useCalendarMutationStatusToast } from '../../model/useCalendarMutationStatusToast';
import { useCalendarDeleteStatusToast } from '../../model/useCalendarDeleteStatusToast';

import './CalendarList.scss';

type Props = {
	calendarList: Calendar[];
};

export const CalendarList: React.FC<Props> = ({ calendarList }) => {
	const { isOpen, open, toggleState, triggerElement, calendar } = useCalendarManagerPopup();
	const mutationStatusToasts = useCalendarMutationStatusToast();
	const { mutation } = useOptimisticCalendarMutation({ ...mutationStatusToasts });
	const deleteStatusToasts = useCalendarDeleteStatusToast();
	const { mutation: removeMutation } = useOptimisticCalendarDelete({ ...deleteStatusToasts });
	const { modifyCalendar } = useCalendarList();

	const onSave = ({ color, title }: CalendarForm) => {
		if (calendar) {
			calendar.color = color;
			calendar.title = title;
			mutation.mutate(calendar);
		}
	};

	const openCalendarProperties = (event: React.MouseEvent, calendar?: Calendar) => {
		open(event, calendar || new Calendar('', '#9F2957', true, false));
	};

	const closeDeleteModal = (calendar?: Calendar) => {
		if (calendar && !calendar.isDefault) {
			removeMutation.mutate(calendar);
		}
	};

	const toggleCalendarStatus = (calendar: Calendar, isActive: boolean) => {
		calendar.isActive = isActive;
		modifyCalendar(calendar);
	};

	return (
		<>
			<div className="calendarListPanel">
				<div className="flex flex-row justify-between">
					<div className="font-bold">My calendars</div>
					<IconBtn icon={<PlusIcon color="inherit" />} onClick={(event) => openCalendarProperties(event)} />
				</div>

				<div className="calendarList">
					{calendarList.map((c) => (
						<div key={c.id} className="calendarItem">
							<Checkbox
								defaultChecked={c.isActive}
								label={c.title}
								id={c.id}
								onChange={({ target }) => toggleCalendarStatus(c, target.checked)}
								color={c.color}
							/>

							<div className="calendarItemActions">
								{!c.isDefault && <DeleteCalendarButton calendar={c} onClose={(calendar) => closeDeleteModal(calendar)} />}
								<IconBtn icon={<EditIcon color="inherit" />} onClick={(event) => openCalendarProperties(event, c)} />
							</div>
						</div>
					))}
				</div>
			</div>

			{calendar && (
				<CalendarManagerPopup
					open={isOpen}
					calendar={calendar!}
					toggleState={toggleState}
					triggerElement={triggerElement!}
					onSave={onSave}
				/>
			)}
		</>
	);
};
