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
