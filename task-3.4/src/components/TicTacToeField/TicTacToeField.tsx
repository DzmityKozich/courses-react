import React, { useEffect, useMemo } from 'react';
import { TicTacToeCell } from '../../share';
import { useTicTacToe } from '../../hooks/useTicTacToe';
import { CellValue, Player } from '../../types/types';

import './TicTacToeField.scss';

type Props = {
	values?: any[];
	status?: string;
	player: Player;
};

export const TicTacToeField: React.FC<Props> = ({ player }) => {
	const [values, setValue, currentPlayer, winner] = useTicTacToe((state) => [
		state.values,
		state.setValue,
		state.currentPlayer,
		state.winner,
	]);

	const disabled = useMemo(() => {
		if (winner) return true;
		return player === currentPlayer;
	}, [currentPlayer, winner]);

	useEffect(() => {
		console.log(values);
		console.log(winner);
	}, [values]);

	const move = (index: number) => {
		if (!disabled) {
			const value: CellValue = player === 'playerX' ? 'x' : 'o';
			setValue(index, value);
		}
	};

	return (
		<>
			{/* <div className="status">{status}</div> */}
			<div className="ticTacToeField">
				{values.map((value, i) => (
					<TicTacToeCell key={i} value={value} index={i} onClick={() => move(i)} disabled={disabled} />
				))}
			</div>
		</>
	);
};
