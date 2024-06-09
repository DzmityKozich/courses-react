export const calculateHeight = (textarea: HTMLTextAreaElement, shadowTextarea: HTMLTextAreaElement, rows: number): number => {
	shadowTextarea.value = 'x';
	const singleRowHeight = shadowTextarea.scrollHeight;
	const minHeight = rows * singleRowHeight;
	const maxHeight = 10 * singleRowHeight;

	console.log({ singleRowHeight });
	if (!textarea.value) {
		return minHeight;
	}

	shadowTextarea.value = textarea.value;
	const shadowHeight = shadowTextarea.scrollHeight;

	if (shadowHeight < minHeight) {
		return minHeight;
	}

	if (shadowHeight > maxHeight) {
		return maxHeight;
	}

	return shadowHeight;
};
