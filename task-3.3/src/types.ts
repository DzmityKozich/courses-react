export interface ControlError {
	message: string;
}

export interface RegistrationForm {
	username?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	isAgree?: boolean;
}

export interface ValidationOptions {
	ref: string;
	fn: (value: any, errMessage?: string) => ValidationFn;
	errMessage?: string;
}

export type ValidationError = { [errorKey: string]: string };
export type ValidationFn = (value: any) => ValidationError | null;
export type ValidatorOptions = (ValidationFn | ValidationOptions)[];
export type ValidationResult = { [field: string]: ValidationError[] };
