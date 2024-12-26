import { ValidationFn } from '../types';

export namespace Validators {
	export const pattern = (pattern: string | RegExp, message?: string): ValidationFn => {
		return (value) => {
			const regexp = new RegExp(pattern);
			if (regexp.test(value)) {
				return null;
			} else {
				return { pattern: message || `value not match ${regexp} pattern` };
			}
		};
	};

	export const required: ValidationFn = (value: any) => {
		const isValue = ![null, '', undefined].includes(value);
		return isValue ? null : { required: 'value is required' };
	};

	export const confirmPassword = (password: string, message?: string): ValidationFn => {
		return (confirmValue) => {
			const isEqual = password === confirmValue;
			return isEqual ? null : { confirmPassword: message || 'not equal' };
		};
	};

	export const email: ValidationFn = (value: string) => {
		const result = pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)(value);
		if (!result) return null;
		return { email: 'invalid email' };
	};
}
