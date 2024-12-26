import { useCallback, useRef } from 'react';
import { RegistrationForm, ValidationResult, ValidatorOptions } from '../types';
import { Validators } from '../utils/validation';

type FormValidation = { [field: string]: ValidatorOptions };

export const useValidation = () => {
	const formValidator = useRef<FormValidation>({
		username: [Validators.required, Validators.pattern(/^[A-Za-z]+$/, 'invalid value')],
		email: [Validators.required, Validators.email],
		password: [
			Validators.required,
			Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'invalid password'),
		],
		confirmPassword: [Validators.required, { ref: 'password', fn: Validators.confirmPassword, errMessage: 'password is not equal' }],
		isAgree: [],
	});

	const validate = useCallback((formValue: RegistrationForm): ValidationResult => {
		if (!formValidator.current) return {};
		return Object.entries(formValue).reduce((errors, [key, val]) => {
			const errs = collectFieldErrors(key, val, formValue);
			return { ...errors, [key]: errs };
		}, {});
	}, []);

	const collectFieldErrors = (key: string, value: any, formValue: RegistrationForm) => {
		return formValidator.current[key]
			.map((validator) => {
				if (typeof validator === 'function') {
					return validator(value);
				} else {
					const { ref, fn, errMessage } = validator;
					return fn((formValue as any)[ref], errMessage)(value);
				}
			})
			.filter((val) => !!val);
	};

	return { validate };
};
