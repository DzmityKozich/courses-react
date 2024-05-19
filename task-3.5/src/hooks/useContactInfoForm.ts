import { create } from 'zustand';

type FormValues = { firstName?: string; lastName?: string; email?: string; phone?: string };

type Store = {
	valid: boolean;
	value: FormValues;
	setValue: (value: FormValues) => void;
	setValid: (valid: boolean) => void;
};

export const useContactInfoForm = create<Store>((set) => ({
	valid: false,
	value: {},
	setValue: (value) => set(() => ({ value })),
	setValid: (valid) => set(() => ({ valid })),
}));
