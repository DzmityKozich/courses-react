export interface StoreItem {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

export interface FormStore<FormValues> {
	valid: boolean;
	value: FormValues;
	setValue: (value: FormValues) => void;
	setValid: (valid: boolean) => void;
}

export interface ContactForm {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

export interface ShipmentForm {
	address: string;
	apartment: string;
	city: string;
	country: string;
	state: string;
	zip: string;
}
