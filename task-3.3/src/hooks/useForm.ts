import { useState, ChangeEvent, useCallback } from 'react';

type FieldsType = {
	username?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	isAgree?: boolean;
};

export function useForm(initialState: FieldsType) {
	const [fields, setValues] = useState(initialState);

	const updateFields = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { target } = event;
			const value = target.type === 'checkbox' ? target.checked : target.value;
			setValues({
				...fields,
				[event.target.name]: value,
			});
		},
		[fields]
	);

	return { fields, updateFields };
}
