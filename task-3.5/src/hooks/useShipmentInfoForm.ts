import { create } from 'zustand';
import { FormStore } from '../models/types';

interface ShipmentFormValues {
	address?: string;
	apartment?: string;
	city?: string;
	country?: string;
	state?: string;
	zip?: string;
}

export const useShipmentInfoForm = create<FormStore<ShipmentFormValues>>((set) => ({
	valid: false,
	value: {},
	setValid: (valid) => set(() => ({ valid })),
	setValue: (value) => set(() => ({ value })),
}));
