import React, { useEffect, useMemo } from 'react';
import { TicTacToeCell } from '../../share';
import { useTicTacToe } from '../../hooks/useTicTacToe';
import { CellValue, Player } from '../../types/types';

import './TicTacToeField.scss';
import classNames from 'classnames';

type Props = {
	player: Player;
};

const defineStatus = (player: Player, currentPlayer: Player, winner: Player | null): string => {
	if (winner === player) return 'You win!';
	if (!winner) {
		if (currentPlayer === player) return 'Your turn:';
		return 'Wait your opponent.';
	}
	if (winner !== player) return 'You lost!';
	return 'Draw!';
};

export const TicTacToeField: React.FC<Props> = ({ player }) => {
	const [values, setValue, currentPlayer, winner] = useTicTacToe((state) => [
		state.values,
		state.setValue,
		state.currentPlayer,
		state.winner,
	]);

	const status = useMemo(() => defineStatus(player, currentPlayer, winner), [player, currentPlayer, winner]);

	useEffect(() => {
		console.log(values);
		console.log(winner);
	}, [values]);

	const isDisabled = (value: CellValue | null): boolean => {
		if (value) return true;
		if (winner) return true;
		return player !== currentPlayer;
	};

	const move = (value: CellValue | null, index: number) => {
		if (!isDisabled(value)) {
			const value: CellValue = player === 'playerX' ? 'x' : 'o';
			setValue(index, value);
		}
	};

	return (
		<div className="flex flex-col items-center">
			<div className={classNames('status', { 'text-green-500': player === winner, 'text-red-500': winner ? player !== winner : false })}>
				{status}
			</div>
			<div className="ticTacToeField">
				{values.map((value, i) => (
					<TicTacToeCell key={i} value={value} index={i} onClick={() => move(value, i)} disabled={isDisabled(value)} />
				))}
			</div>
		</div>
	);
};
