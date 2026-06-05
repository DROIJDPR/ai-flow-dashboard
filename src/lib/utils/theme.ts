import { browser } from '$app/environment';

import { theme, type Theme } from '$lib/stores/theme.store';

export function initializeTheme() {
	if (!browser) return;

	const savedTheme =
		localStorage.getItem('theme') as Theme | null;

	if (savedTheme) {
		theme.set(savedTheme);

		document.documentElement.setAttribute(
			'data-theme',
			savedTheme
		);
	}
}