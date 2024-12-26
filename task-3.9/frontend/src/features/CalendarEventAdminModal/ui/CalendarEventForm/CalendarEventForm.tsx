import { CalendarEvent } from 'entities/CalendarEvent';
import { ClockIcon, DescriptionIcon, TitleIcon } from 'shared/ui-kit';
import { InputField } from 'shared/ui-kit/InputField';
import { CalendarIcon } from 'shared/ui-kit/icons/CalendarIcon';
import { Select } from 'shared/ui-kit/Select';
import { MenuItem } from 'shared/ui-kit/Menu';
import { Checkbox } from 'shared/ui-kit/Checkbox';
import { Textarea } from 'shared/ui-kit/Textarea';
import { useCallback, useEffect } from 'react';
import { DateTimePicker } from '../DateTimePicker';
import { useFormik } from 'formik';
import { DateTimePickerValue } from '../../model/DateTimePickerValue';
import { useCalendarList } from 'entities/Calendar';
import { useCalendarEventAdmin } from '../../model/CalendarEventAdminModalContext';
import { CalendarBadge } from 'features/CalendarBadge';
import { initCalendarEventForm } from '../../lib/calendar-event-form';
import * as yup from 'yup';

import './CalendarEventForm.scss';

const validationSchema = yup.object().shape({
	title: yup
		.string()
		.required('Title is required')
		.min(3, 'Title must be at least 3 characters')
		.max(100, 'Title must be at most 100 characters'),
	text: yup.string().min(3, 'Title must be at least 3 characters').max(500, 'Text must be at most 500 characters'),
	calendarId: yup.string().required('Calendar is required'),
});

type Props = {
	event?: CalendarEvent;
};

export const CalendarEventForm: React.FC<Props> = ({ event }) => {
	const { setFormValid, setFormValue } = useCalendarEventAdmin();
	const { calendarList } = useCalendarList();

	const formik = useFormik({
		initialValues: {
			...initCalendarEventForm(event),
		},
		onSubmit: () => {},
		validationSchema,
	});

	const updateFieldValue = useCallback(
		(fieldName: string, value: any, shouldValidate: boolean = true) => {
			formik.setFieldValue(fieldName, value, shouldValidate);
		},
		[formik]
	);

	const setEventTime = useCallback(
		(value: DateTimePickerValue) => {
			updateFieldValue('startTime', value.startTime);
			updateFieldValue('endTime', value.endTime);
		},
		[updateFieldValue]
	);

	useEffect(() => {
		setFormValid(formik.isValid);
		if (formik.isValid) {
			const { allDay, calendarId, endTime, startTime, text, title, id } = formik.values;
			setFormValue(new CalendarEvent(calendarId, startTime.toISOString(), endTime.toISOString(), allDay, title, text, id));
		}
	}, [formik.isValid, formik.values]);

	return (
		<form className="eventForm">
			<div className="form-field">
				<TitleIcon color="inherit" />
				<InputField
					label="Title"
					id="event-title"
					placeholder="Enter title"
					{...formik.getFieldProps('title')}
					error={formik.touched.title && !!formik.errors.title}
					helpText={formik.touched.title ? formik.errors.title : ''}
					required
				/>
			</div>

			<div className="form-field">
				<ClockIcon color="inherit" />
				<div className="w-full">
					<DateTimePicker startTime={formik.values.startTime} endTime={formik.values.endTime} onChange={setEventTime} />
				</div>
			</div>

			<div className="form-field">
				<div className="plaseholder"></div>
				<Checkbox
					label="All day"
					id="all-day"
					checked={formik.values.allDay}
					onChange={({ target }) => updateFieldValue('allDay', target.checked)}
				/>
			</div>

			<div className="form-field">
				<CalendarIcon color="inherit" />
				<Select
					select={(id) => updateFieldValue('calendarId', id)}
					value={formik.values.calendarId}
					onClose={() => formik.setFieldTouched('calendarId')}
					label="Calendar"
					id="calendarId"
					error={formik.touched.calendarId && !!formik.errors.calendarId}
					helpText={formik.touched.calendarId ? formik.errors.calendarId : ''}
				>
					{calendarList.map((calendar) => (
						<MenuItem key={calendar.id} value={calendar.id}>
							<CalendarBadge calendar={calendar} />
						</MenuItem>
					))}
				</Select>
			</div>

			<div className="form-field">
				<DescriptionIcon color="inherit" />
				<Textarea
					label="Description"
					className="w-full"
					rows={2}
					id="description"
					placeholder="Event description"
					{...formik.getFieldProps('text')}
					error={!!formik.errors.text && formik.touched.text}
					helpText={formik.touched.text ? formik.errors.text : ''}
				/>
			</div>
		</form>
	);
};
