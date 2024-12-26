import React, { useMemo } from 'react';
import { useEscKeydown } from '../hooks/useEscKeydown';
import classNames from 'classnames';

import './Backdrop.scss';

type Props = {
	onClose: () => void;
	animated?: boolean;
	bgColor?: string;
};

export const Backdrop: React.FC<Props> = ({ onClose, animated = true, bgColor }) => {
	useEscKeydown(onClose);

	const backgroundColor = useMemo(() => {
		return bgColor || '#00000080';
	}, [bgColor]);

	return (
		<div
			className={classNames('backdrop', { 'appearance-animate': animated })}
			onClick={onClose}
			style={{ backgroundColor }}
			role="backdrop"
		></div>
	);
};
