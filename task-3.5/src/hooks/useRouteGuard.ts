import { create } from 'zustand';

type GuartStore = {
	contactInfoPageAccess: boolean;
	shipmentInfoPageAccess: boolean;
	orderInfoPageAccess: boolean;
	setContactInfoPageAccess: (access: boolean) => void;
	setShipmentInfoPageAccess: (access: boolean) => void;
	setOrderInfoPageAccess: (access: boolean) => void;
};

export const useRoutGuard = create<GuartStore>((set) => ({
	contactInfoPageAccess: false,
	shipmentInfoPageAccess: false,
	orderInfoPageAccess: false,
	setContactInfoPageAccess: (access) => set(() => ({ contactInfoPageAccess: access })),
	setShipmentInfoPageAccess: (access) => set(() => ({ shipmentInfoPageAccess: access })),
	setOrderInfoPageAccess: (access) => set(() => ({ orderInfoPageAccess: access })),
}));
