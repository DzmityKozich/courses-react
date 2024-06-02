type Pages = 'button' | 'link' | 'dropdown';

export const Paths: Record<Pages, string> = {
	button: 'button',
	link: 'link',
	dropdown: 'dropdown',
};

interface Navigation {
	prev?: string;
	next?: string;
}

export const Navigations: Record<Pages | string, Navigation> = {
	button: { next: Paths.link },
	link: { prev: Paths.button, next: Paths.dropdown },
	dropdown: { prev: Paths.link },
};
