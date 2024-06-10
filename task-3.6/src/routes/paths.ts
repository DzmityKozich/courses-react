type Pages = 'button' | 'link' | 'dropdown' | 'input' | 'checkbox' | 'textarea';

export const Paths: Record<Pages, string> = {
	button: 'button',
	link: 'link',
	dropdown: 'dropdown',
	input: 'input',
	checkbox: 'checkbox',
	textarea: 'textarea',
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
	textarea: { prev: Paths.checkbox },
};
