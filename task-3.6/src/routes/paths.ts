type Pages =
	| 'button'
	| 'link'
	| 'dropdown'
	| 'input'
	| 'checkbox'
	| 'textarea'
	| 'select'
	| 'modal'
	| 'toast'
	| 'colorpicker'
	| 'datepicker';

export const Paths: Record<Pages, string> = {
	button: 'button',
	link: 'link',
	dropdown: 'dropdown',
	input: 'input',
	checkbox: 'checkbox',
	textarea: 'textarea',
	select: 'select',
	modal: 'modal',
	toast: 'toast',
	colorpicker: 'colorpicker',
	datepicker: 'datepicker',
};

interface Navigation {
	prev?: string;
	next?: string;
}

export const Navigations: Record<Pages | string, Navigation> = {
	button: { next: Paths.link },
	link: { prev: Paths.button, next: Paths.dropdown },
	dropdown: { prev: Paths.link, next: Paths.input },
	input: { prev: Paths.dropdown, next: Paths.checkbox },
	checkbox: { prev: Paths.input, next: Paths.textarea },
	textarea: { prev: Paths.checkbox, next: Paths.select },
	select: { prev: Paths.textarea, next: Paths.modal },
	modal: { prev: Paths.select, next: Paths.toast },
	toast: { prev: Paths.modal, next: Paths.colorpicker },
	colorpicker: { prev: Paths.toast, next: Paths.datepicker },
	datepicker: { prev: Paths.colorpicker },
};
