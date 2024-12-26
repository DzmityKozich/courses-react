import { create } from 'zustand';
import { FormStore, ShipmentForm } from '../models/types';

export const useShipmentInfoForm = create<FormStore<Partial<ShipmentForm>>>((set) => ({
	valid: false,
	value: {},
	setValid: (valid) => set(() => ({ valid })),
	setValue: (value) => set(() => ({ value })),
}));
