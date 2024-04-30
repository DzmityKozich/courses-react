import { useState, ChangeEvent, useCallback } from 'react';
import { RegistrationForm } from '../types';

export function useForm(initialState: RegistrationForm) {
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
