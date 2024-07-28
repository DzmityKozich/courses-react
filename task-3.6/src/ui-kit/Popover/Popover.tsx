import React, { CSSProperties, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useEscKeydown } from '../hooks/useEscKeydown';
import { calculatePopover } from './utils';
import { PopoverBackdrop, PopoverContainer } from './styled-elements';

import './Popover.scss';

type Props = {
	children: ReactNode | ReactNode[];
	open: boolean;
	toggleState: () => void;
	triggerElement: HTMLElement;
};

export const Popover: React.FC<Props> = ({ children, open, triggerElement, toggleState }) => {
	const popoverRef = useRef<HTMLDivElement>(null);
	const [settings, setSettings] = useState<CSSProperties>();

	const onBlur = useCallback(() => {
		toggleState();
	}, [toggleState, triggerElement]);

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

	useEffect(() => {
		popoverRef.current?.addEventListener('blur', onBlur);

		return () => {
			popoverRef.current?.removeEventListener('blur', onBlur);
		};
	});

	return (
		open && (
			<>
				<PopoverBackdrop />
				<PopoverContainer ref={popoverRef} style={{ ...settings }} tabIndex={0}>
					{children}
				</PopoverContainer>
			</>
		)
	);
};
