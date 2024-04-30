export type ValidationError = { [errorKey: string]: any } | null;
export type ValidationFn = (value: any) => ValidationError;

export namespace Validators {
	export const pattern = (pattern: string | RegExp): ValidationFn => {
		return (value) => {
			const regexp = new RegExp(pattern);
			if (regexp.test(value)) {
				return null;
			} else {
				return { pattern: `value not match ${regexp} pattern` };
			}
		};
	};

	export const required: ValidationFn = (value: any) => {
		const isValue = ![null, '', undefined].includes(value);
		return isValue ? null : { required: 'value is missing' };
	};

	export const confirmPassword = (password: string): ValidationFn => {
		return (confirmValue) => {
			const isEqual = password === confirmValue;
			return isEqual ? null : { confirmPassword: 'not equal' };
		};
	};

	export const email: ValidationFn = (value: string) => {
		const result = pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)(value);
		if (!result) return null;
		return { email: 'value is not match email pattern' };
	};
}
