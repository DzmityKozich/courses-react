import React, { ReactNode } from 'react';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import './StoreBreadcrumbs.scss';

// TODO: move to share

type Props = {
	breadcrumbs: ReactNode[];
};

export const StoreBreadcrumbs: React.FC<Props> = ({ breadcrumbs }) => {
	return (
		<div className="mb-8">
			<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
				{breadcrumbs}
			</Breadcrumbs>
		</div>
	);
};
