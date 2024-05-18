import { FormikErrors } from 'formik';
import { create } from 'zustand';

type FormValues = { firstName?: string; lastName?: string; email?: string; phone?: string };

type Store = {
	errors: FormikErrors<FormValues>;
	value: FormValues;
	setValue: (value: FormValues) => void;
	setErrors: (errors: FormikErrors<FormValues>) => void;
};

export const useContactInfoForm = create<Store>((set) => ({
	errors: {},
	value: {},
	setValue: (value) => set(() => ({ value })),
	setErrors: (errors) => set(() => ({ errors })),
}));
