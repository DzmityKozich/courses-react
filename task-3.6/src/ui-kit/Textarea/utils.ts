const BORDER_HEIGHT = 1;

export const calculateHeight = (textarea: HTMLTextAreaElement, shadowTextarea: HTMLTextAreaElement, rows: number): number => {
	const { height } = getComputedStyle(textarea, null);
	if (height === '0px') return 0;

	shadowTextarea.value = 'x';
	const singleRowHeight = shadowTextarea.scrollHeight;
	const minHeight = rows * singleRowHeight;
	const maxHeight = 10 * singleRowHeight;

	if (!textarea.value) {
		return minHeight;
	}

	shadowTextarea.value = textarea.value;
	const shadowHeight = shadowTextarea.scrollHeight;

	if (shadowHeight < minHeight) {
		return minHeight + BORDER_HEIGHT;
	}

	if (shadowHeight > maxHeight) {
		return maxHeight + BORDER_HEIGHT;
	}

	return shadowHeight + BORDER_HEIGHT;
};
