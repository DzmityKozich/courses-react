import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => {
	return <div className="flex flex-col gap-10">{children}</div>;
};
