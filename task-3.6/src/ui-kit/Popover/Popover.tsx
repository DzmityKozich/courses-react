import React, { CSSProperties, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useEscKeydown } from '../hooks/useEscKeydown';
import { calculatePopoverSettings } from './utils';

import './Popover.scss';

type Props = {
	children: ReactNode | ReactNode[];
	open: boolean;
	toggleState: () => void;
	triggerElement: HTMLElement;
};

const PopoverContainer = styled.div`
	max-height: 50vh;
	z-index: 1000;
	transform: translateX(-50%);
	position: fixed;
	overflow: auto;
	border: 1px #dee0e5 solid;
	box-shadow: 0px 8px 16px 0px #3131311a;
	border-radius: 8px;
	outline: none;
`;

const PopoverBackdrop = styled.div`
	position: fixed;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
	z-index: 999;
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
			popoverRef.current?.classList.add('entering');
		} else {
			popoverRef.current?.classList.remove('entering');
		}
	}, [open]);

	useEffect(() => {
		const {
			minWidth,
			position: { left, top },
		} = calculatePopoverSettings(triggerElement);
		setSettings({ minWidth, top, left });
	}, [triggerElement, open]);

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
