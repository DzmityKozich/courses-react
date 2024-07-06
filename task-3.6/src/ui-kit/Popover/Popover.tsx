import React, { CSSProperties, ReactChild, ReactChildren, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useEscKeydown } from '../hooks/useEscKeydown';
import { calculatePopoverSettings } from './utils';

type Props = {
	children: ReactNode | ReactNode[];
	open: boolean;
	toggleState: () => void;
	triggerElement: HTMLElement;
};

const PopoverContainer = styled.div`
	max-height: 50vh;
	/* width: fit-content; */
	z-index: 1000;
	transform: translateX(-50%);
	position: fixed;
	overflow: hidden;
	outline: none;
`;

export const Popover: React.FC<Props> = ({ children, open, triggerElement, toggleState }) => {
	const [settings, setSettings] = useState<CSSProperties>();
	const popoverRef = useRef<HTMLDivElement>(null);

	const onBlur = useCallback(
		(event: FocusEvent) => {
			if (!triggerElement?.contains(event.relatedTarget as HTMLElement)) {
				toggleState();
			}
		},
		[toggleState, triggerElement],
	);

	const escClose = useCallback(() => {
		if (open) {
			toggleState();
		}
	}, [toggleState, open]);

	useEscKeydown(escClose);

	useEffect(() => {
		if (open) {
			popoverRef.current?.focus();
		}
	}, [open]);

	useEffect(() => {
		const {
			minWidth,
			position: { left, top },
		} = calculatePopoverSettings(triggerElement);
		setSettings({ minWidth, top, left });
	}, [triggerElement]);

	useEffect(() => {
		popoverRef.current?.addEventListener('blur', onBlur);

		return () => {
			popoverRef.current?.removeEventListener('blur', onBlur);
		};
	});

	return (
		open && (
			<PopoverContainer ref={popoverRef} style={{ ...settings }} tabIndex={0}>
				{children}
			</PopoverContainer>
		)
	);
};
