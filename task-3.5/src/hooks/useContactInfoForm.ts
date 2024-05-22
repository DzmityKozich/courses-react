import { create } from 'zustand';
import { ContactForm, FormStore } from '../models/types';

export const useContactInfoForm = create<FormStore<Partial<ContactForm>>>((set) => ({
	valid: false,
	value: {},
	setValue: (value) => set(() => ({ value })),
	setValid: (valid) => set(() => ({ valid })),
}));
