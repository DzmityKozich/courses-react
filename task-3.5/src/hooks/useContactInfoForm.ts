import { create } from 'zustand';
import { FormStore } from '../models/types';

type FormValues = { firstName?: string; lastName?: string; email?: string; phone?: string };

export const useContactInfoForm = create<FormStore<FormValues>>((set) => ({
	valid: false,
	value: {},
	setValue: (value) => set(() => ({ value })),
	setValid: (valid) => set(() => ({ valid })),
}));
