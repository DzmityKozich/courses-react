import React, { CSSProperties, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useEscKeydown } from '../hooks/useEscKeydown';
import { calculatePopover } from './utils';
import { PopoverBackdrop, PopoverContainer } from './styled-elements';

import './Popover.scss';

type Props = {
	children: ReactNode | ReactNode[];
	open: boolean;
	toggleState: (...args: any[]) => void;
	triggerElement: HTMLElement;
};

export const Popover: React.FC<Props> = ({ children, open, triggerElement, toggleState }) => {
	const popoverRef = useRef<HTMLDivElement>(null);
	const [settings, setSettings] = useState<CSSProperties>();

	const escClose = useCallback(() => {
		if (open) {
			toggleState();
		}
	}, [toggleState, open]);

	useEscKeydown(escClose);

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
			<>
				<PopoverBackdrop onClick={() => toggleState()}>backdrop</PopoverBackdrop>
				<PopoverContainer ref={popoverRef} style={{ ...settings }} tabIndex={0}>
					{children}
				</PopoverContainer>
			</>
		)
	);
};
