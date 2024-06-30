import { position } from 'polished';
import { useEffect, useRef } from 'react';

type Props = {
	onClose: () => void;
	open: boolean;
	autoHideDuration?: number;
	position: 'bottom-left' | 'top-left' | 'top-center' | 'top-right' | 'bottom-right' | 'bottom-center';
};

export const useToast = ({ autoHideDuration, onClose, open, position }: Props) => {
	const timer = useRef<any>();

	useEffect(() => {
		if (autoHideDuration && open) {
			timer.current = setTimeout(() => {
				onClose();
				clearTimeout(timer.current);
			}, autoHideDuration);
		} else {
			clearTimeout(timer.current);
		}
	}, [autoHideDuration, open]);

	const getAppearanceAnimation = () => {
		switch (position) {
			case 'bottom-center':
				return 'bottomAppearance';
			case 'bottom-left':
				return 'leftAppearance';
			case 'bottom-right':
				return 'rightAppearance';
			case 'top-center':
				return 'topAppearance';
			case 'top-left':
				return 'leftAppearance';
			case 'top-right':
				return 'rightAppearance';
		}
	};

	return { appearance: getAppearanceAnimation() };
};
