import React, { ReactNode, useContext } from 'react';
import { DropdownContext } from '../Dropdown/DropdownContext';
import { Popover } from '../Popover';

import './Menu.scss';
import { StyledDiv, StyledUl } from './styled-elements';

type Props = {
	children: ReactNode | ReactNode[];
};

export const Menu: React.FC<Props> = ({ children }) => {
	const context = useContext(DropdownContext);

	return (
		<Popover open={context?.state.open!} toggleState={context?.toggleState!} triggerElement={context?.triggerElement!}>
			<StyledDiv>
				<StyledUl>{children}</StyledUl>
			</StyledDiv>
		</Popover>
	);
};
