import React, { CSSProperties, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';
import { calculateMenuSettings } from './utils';

import './Menu.scss';

type Props = {
	children: ReactNode | ReactNode[];
};

const StyledDiv = styled.div`
	/* padding: 0.5rem; */
	border: 1px #dee0e5 solid;
	border-radius: 8px;
	background-color: #fff;
	position: fixed;
	min-width: 200px;
	transform: translateX(-50%);
`;

const StyledUl = styled.ul`
	list-style-type: none;

	& li {
		text-align: start;
	}
`;

export const Menu: React.FC<Props> = ({ children }) => {
	const context = useContext(DropdownContext);
	const [settings, setSettings] = useState<CSSProperties>();
	const menuRef = useRef<HTMLDivElement>(null);
	const documentRef = useRef(document);

	const onBlur = useCallback(() => {
		context?.toggleState();
	}, [context?.toggleState]);

	const escClose = useCallback(
		(event: KeyboardEvent) => {
			const isEsc = event.key === 'Escape';
			if (isEsc && context?.state.open) {
				context.toggleState();
			}
		},
		[context?.toggleState, context?.state],
	);

	useEffect(() => {
		const {
			minWidth,
			position: { left, top },
		} = calculateMenuSettings(context?.triggerElement);
		setSettings({ minWidth, top, left });
	}, [context]);

	useEffect(() => {
		documentRef.current?.addEventListener('keydown', escClose);

		return () => {
			documentRef.current?.removeEventListener('keydown', escClose);
		};
	});

	useEffect(() => {
		menuRef.current?.addEventListener('blur', onBlur);

		return () => {
			menuRef.current?.removeEventListener('blur', onBlur);
		};
	});

	useEffect(() => {
		if (context?.state.open) {
			menuRef.current?.focus();
		}
	}, [context?.state.open]);

	return (
		<>
			{context?.state.open && (
				<StyledDiv style={{ ...settings }} tabIndex={0} ref={menuRef}>
					<StyledUl>{children}</StyledUl>
				</StyledDiv>
			)}
		</>
	);
};
