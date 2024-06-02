import React, { ReactNode } from 'react';

import './MenuItem.scss';

type Props = {
	children: ReactNode;
};

export const MenuItem: React.FC<Props> = ({ children }) => {
	return <li>{children}</li>;
};
