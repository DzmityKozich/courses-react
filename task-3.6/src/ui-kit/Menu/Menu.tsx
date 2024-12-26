import React, { ReactNode, useContext } from 'react';
import { DropdownContext } from '../Dropdown/DropdownContext';
import { Popover } from '../Popover';
import { StyledDiv, StyledUl } from './styled-elements';

import './Menu.scss';

type Props = {
	children: ReactNode | ReactNode[];
};

export const Menu: React.FC<Props> = ({ children }) => {
	const context = useContext(DropdownContext);

	return (
		<Popover open={context?.state.open!} toggleState={context?.toggleState!} triggerElement={context?.triggerElement!}>
			<StyledDiv data-testid="Menu">
				<StyledUl>{children}</StyledUl>
			</StyledDiv>
		</Popover>
	);
};
