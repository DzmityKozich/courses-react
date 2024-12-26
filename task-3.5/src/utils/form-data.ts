import { ContactForm, ShipmentForm } from '../models/types';

export const contactFormText = (form: Partial<ContactForm>): string => {
	return `${form.firstName} ${form.lastName}\n${form.email}\n${form.phone}`;
};

export const shipmentFormText = (form: Partial<ShipmentForm>): string => {
	return Object.values(form).join('\n');
};
