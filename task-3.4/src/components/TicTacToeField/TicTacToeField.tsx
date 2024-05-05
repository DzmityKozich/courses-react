import React from 'react';
import { TicTacToeCell } from '../../share';

import './TicTacToeField.scss';

type Props = {
	values?: any[];
	status?: string;
};

export const TicTacToeField: React.FC<Props> = ({ values, status }) => {
	return (
		<>
			<div className="status">{status}</div>
			<div className="ticTacToeField">
				<TicTacToeCell value={null} />
				<TicTacToeCell value={'o'} />
				<TicTacToeCell value={'o'} />
				<TicTacToeCell value={'o'} />
				<TicTacToeCell value={'o'} />
				<TicTacToeCell value={'o'} />
				<TicTacToeCell value={'o'} />
				<TicTacToeCell value={'o'} />
				<TicTacToeCell value={'o'} />
			</div>
		</>
	);
};
