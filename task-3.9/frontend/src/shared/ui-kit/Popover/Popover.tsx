import React, { CSSProperties, ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { calculatePopover } from './utils';
import { PopoverContainer } from './styled-elements';
import { Overlay } from '../Overlay';

import './Popover.scss';

type Props = {
	children: ReactNode | ReactNode[];
	open: boolean;
	toggleState: (...args: any[]) => void;
	triggerElement: HTMLElement;
	className?: string;
};

export const Popover: React.FC<Props> = ({ children, open, triggerElement, toggleState, className }) => {
	const popoverRef = useRef<HTMLDivElement>(null);
	const [settings, setSettings] = useState<CSSProperties>();

	useEffect(() => {
		if (open) {
			popoverRef.current?.focus();
			popoverRef.current?.classList.add('entering');
		} else {
			popoverRef.current?.classList.remove('entering');
		}
	}, [open]);

	useLayoutEffect(() => {
		if (open) {
			const {
				height,
				minWidth,
				position: { left, top },
			} = calculatePopover(triggerElement, popoverRef.current);
			setSettings({ height, minWidth, left, top });
		}
	}, [open]);

	return (
		open && (
			<Overlay onClose={toggleState} backdropColor="transparent">
				<PopoverContainer ref={popoverRef} style={{ ...settings }} tabIndex={0} className={className}>
					{children}
				</PopoverContainer>
			</Overlay>
		)
	);
};
