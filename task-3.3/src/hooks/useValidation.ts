import { useCallback, useRef } from 'react';
import { RegistrationForm } from '../types';
import { ValidationError, Validators, ValidationFn } from '../utils/validation';

type FormValidation = { [p: string]: (ValidationFn | any)[] };

export const useValidation = () => {
	const formValidator = useRef<FormValidation>({
		username: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)],
		email: [Validators.required, Validators.email],
		password: [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)],
		confirmPassword: [Validators.required, { ref: 'password', fn: Validators.confirmPassword }],
		isAgree: [],
	});

	const validate = useCallback((value: RegistrationForm): { [field: string]: ValidationError[] } => {
		if (!formValidator.current) return {};
		return Object.entries(value).reduce((errors, [key, val]) => {
			const errs = formValidator.current[key].map((validator) => {
				if (typeof validator === 'function') {
					return validator(val);
				} else {
					const { ref, fn } = validator;
					return fn((value as any)[ref])(val);
				}
			});
			return { ...errors, [key]: errs };
		}, {});
	}, []);

	return { validate, formValidator };
};
