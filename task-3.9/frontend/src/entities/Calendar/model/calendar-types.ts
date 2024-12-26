export interface CalendarDto {
	title: string;
	color: string;
	isDefault: boolean;
	id: string;
}

export interface CalendarStoreModel {
	color: string;
	id: string;
	isActive: boolean;
	isDefault: boolean;
	title: string;
}
