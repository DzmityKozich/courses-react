import { CSSProperties, useEffect, useState } from 'react';
import { calculatePopoverSettings } from './utils';

type Props = {
	triggerElement: HTMLElement;
	docRef: React.MutableRefObject<Document>;
	open: boolean;
	popoverRef: React.MutableRefObject<HTMLElement | null>;
};

export const usePopover = ({ triggerElement }: Props) => {
	const [settings, setSettings] = useState<CSSProperties>();

	useEffect(() => {
		const {
			minWidth,
			position: { left, top },
		} = calculatePopoverSettings(triggerElement);
		setSettings({ minWidth, top, left });
	}, [triggerElement]);

	useEffect(() => {});

	return { settings };
};
