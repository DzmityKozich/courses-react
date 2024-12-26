export type KitDatepicker = {
	defaultDate?: Date;
	selectDate: (date: Date) => void;
	firstYear?: number;
	lastYear?: number;
};
