import { Calendar } from 'entities/Calendar';
import React, { useEffect, useMemo } from 'react';
import { Popover } from 'shared/ui-kit/Popover';
import { Button, CloseIcon, IconBtn, PaletteIcon, TitleIcon } from 'shared/ui-kit';
import { InputField } from 'shared/ui-kit/InputField';
import { Colorpicker, defaultColors } from 'shared/ui-kit/Colorpicker';
import { Label } from 'shared/ui-kit/Label';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './CalendarManagerPopup.scss';

// TODO: rename folders and sort them

export interface CalendarForm {
	title: string;
	color: string;
}

type Props = {
	calendar: Calendar;
	open: boolean;
	toggleState: () => void;
	triggerElement: HTMLElement;
	onSave: (form: CalendarForm) => void;
};

const schema = yup.object().shape({
	title: yup.string().required('This field is required!').max(45, 'No more than 45 characters!'),
	color: yup.string().required('This field is required!'),
});

export const CalendarManagerPopup: React.FC<Props> = ({ calendar, open, toggleState, triggerElement, onSave }: Props) => {
	const formik = useFormik({
		initialValues: {
			title: '',
			color: '',
		},
		validationSchema: schema,
		validateOnBlur: true,
		onSubmit: (values) => {
			onSave(values);
			toggleState();
		},
	});

	const header: string = useMemo(() => {
		return calendar.title ? 'Edit' : 'Create';
	}, [calendar]);

	useEffect(() => {
		const { title, color } = calendar;
		formik.resetForm({ values: { title, color } });
	}, [calendar, formik.setValues]);

	return (
		<Popover open={open} toggleState={toggleState} triggerElement={triggerElement}>
			<div className="createCalendarPopover">
				<div className="popoverHeader">
					{header} calendar
					<IconBtn icon={<CloseIcon color="inherit" />} onClick={toggleState} />
				</div>

				<form noValidate onSubmit={formik.handleSubmit}>
					<div className="popoverBody">
						<div className="form-field">
							<TitleIcon color="#000" />
							<InputField
								label="Title"
								id="calendar-title"
								placeholder="Title"
								{...formik.getFieldProps('title')}
								error={formik.touched.title && !!formik.errors.title}
								helpText={(formik.touched.title && formik.errors.title) || ''}
							/>
						</div>

						<div className="form-field">
							<PaletteIcon color="#000" />
							<div className="w-full">
								<Label>Color</Label>
								<Colorpicker
									defaultColor={formik.values.color}
									colors={defaultColors}
									selectColor={(val) => formik.setFieldValue('color', val, true)}
								/>
							</div>
						</div>
					</div>

					<div className="popoverActions">
						<Button color="primary" type="submit">
							Save
						</Button>
					</div>
				</form>
			</div>
		</Popover>
	);
};
