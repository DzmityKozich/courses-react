import { forwardRef } from 'react';
import { IconButtonProps } from './types';
import { StyledBtn } from './styled-components';

export const IconBtn = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
	const { icon, ...btnProps } = props;

	return (
		<StyledBtn {...btnProps} ref={ref}>
			{icon}
		</StyledBtn>
	);
});
