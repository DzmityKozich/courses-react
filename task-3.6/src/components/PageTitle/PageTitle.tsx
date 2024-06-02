import React from 'react';

import './PageTitle.scss';

type Props = {
	title: string;
};

// TOOD: move to share

export const PageTitle: React.FC<Props> = ({ title }) => {
	return <h1 className="font-semibold w-full text-center">{title}</h1>;
};
