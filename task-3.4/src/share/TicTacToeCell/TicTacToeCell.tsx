import React, { useMemo } from 'react';
import { CellValue } from '../../types/types';
import classNames from 'classnames';

import './TicTacToeCell.scss';

type Props = {
	value: CellValue | null;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const TicTacToeCell: React.FC<Props> = ({ value, onClick }) => {
	const cellValueClass = useMemo(() => {
		if (!value) return '';
		return value === 'o' ? 'o-value' : 'x-value';
	}, [value]);

	return <button className={classNames('cell-btn', cellValueClass)} onClick={onClick}></button>;
};
