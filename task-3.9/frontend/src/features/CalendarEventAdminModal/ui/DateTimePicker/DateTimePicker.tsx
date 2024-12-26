import React, { useCallback, useMemo } from 'react';
import { Select } from 'shared/ui-kit/Select';
import { MenuItem } from 'shared/ui-kit/Menu';
import { DatepickerDropdown } from 'shared/ui-kit/DatepickerDropdown';
import { CalendarDate } from 'entities/CalendarDate';
import { timeOptions } from '../../lib/time-array';
import { useFormik } from 'formik';
import { compareTimeItems, toDateTimePickerValue } from '../../lib/time-utils';
import { DateTimePickerValue } from '../../model/DateTimePickerValue';
import { initDateTimeForm } from '../../lib/date-time-picker-form';

import './DateTimePicker.scss';

type Props = {
	startTime?: CalendarDate;
	endTime?: CalendarDate;
	onChange: (value: DateTimePickerValue) => void;
};

export const DateTimePicker: React.FC<Props> = ({ startTime, endTime, onChange }) => {
	const formik = useFormik({
		initialValues: {
			...initDateTimeForm(startTime, endTime),
		},
		onSubmit: () => {},
	});

	const updateFieldValue = useCallback(
		(fieldName: string, value: any, shouldValidate?: boolean) => {
			formik.setFieldValue(fieldName, value, shouldValidate);
			onChange(toDateTimePickerValue({ ...formik.values, [fieldName]: value } as any));
		},
		[formik.setFieldValue, onChange]
	);

	const endTimeHours = useMemo(() => {
		if (!formik.values.startTime) {
			return timeOptions;
		}
		return timeOptions.filter((option) => option > formik.values.startTime);
	}, [formik.values.startTime]);

	const startTimeHours = useMemo(() => {
		if (!formik.values.endTime) {
			return timeOptions;
		}
		return timeOptions.filter((option) => option < formik.values.endTime);
	}, [formik.values.endTime]);

	return (
		<div className="dateTimePicker">
			<div className="datePicker">
				<DatepickerDropdown date={formik.values.date} onDateSelect={(date) => updateFieldValue('date', date)} label="Date" />
			</div>

			<div className="timePicker">
				<Select
					select={(value) => updateFieldValue('startTime', value)}
					value={formik.values.startTime}
					compareFn={compareTimeItems}
					label="Start Time"
				>
					{startTimeHours.map((item) => (
						<MenuItem key={item.toString()} value={item}>
							{item.toString()}
						</MenuItem>
					))}
				</Select>
			</div>

			<div className="flex items-center pb-3">&mdash;</div>

			<div className="timePicker">
				<Select
					select={(value) => updateFieldValue('endTime', value)}
					value={formik.values.endTime}
					compareFn={compareTimeItems}
					label="End Time"
				>
					{endTimeHours.map((item) => (
						<MenuItem key={item.toString()} value={item}>
							{item.toString()}
						</MenuItem>
					))}
				</Select>
			</div>
		</div>
	);
};
