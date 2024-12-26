import React from 'react';

import './PageTitle.scss';

type Props = {
	title: string;
};

export const PageTitle: React.FC<Props> = ({ title }) => {
	return <p className="pageTitle">{title}</p>;
};
