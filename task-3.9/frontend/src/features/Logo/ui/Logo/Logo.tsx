import React, { useMemo } from 'react';

import './Logo.scss';

type Props = {
	size?: 'default' | 'large';
};

export const Logo: React.FC<Props> = ({ size = 'default' }) => {
	const cssClass = useMemo(() => {
		if (size === 'default') return 'logo';
		if (size === 'large') return 'logo-lg';
	}, [size]);

	return <h2 className={cssClass}>WebCalendar</h2>;
};
