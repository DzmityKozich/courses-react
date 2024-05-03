import { RegistrationForm } from '../types';

export function getFormData(formEl: HTMLFormElement): RegistrationForm {
	const data = new FormData(formEl);
	return { ...Object.fromEntries(data), isAgree: !!data.get('isAgree') };
}
