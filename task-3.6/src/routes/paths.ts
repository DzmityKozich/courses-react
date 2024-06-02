type Pages = 'button' | 'link';

export const Paths: Record<Pages, string> = {
	button: 'button',
	link: 'link',
};

interface Navigation {
	prev?: string;
	next?: string;
}

export const Navigations: Record<Pages | string, Navigation> = {
	button: { next: Paths.link },
	link: { prev: Paths.button },
};
