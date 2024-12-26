import React, { useMemo } from 'react';
import { CellValue } from '../../types/types';
import classNames from 'classnames';

import './TicTacToeCell.scss';

type Props = {
	value: CellValue | null;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	index: number;
	disabled?: boolean;
};

export const TicTacToeCell: React.FC<Props> = ({ value, onClick, index, disabled }) => {
	const cellValueClass = useMemo(() => {
		if (!value) return '';
		return value === 'o' ? 'o-value' : 'x-value';
	}, [value]);

	return (
		<div className={classNames('relative', 'border border-gray-500', 'cell', { active: !disabled }, `cellN${index}`)}>
			<button className={classNames('cell-btn', cellValueClass)} onClick={onClick} disabled={disabled}></button>
		</div>
	);
};
