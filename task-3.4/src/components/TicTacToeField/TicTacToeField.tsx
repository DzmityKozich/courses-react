import React, { useMemo } from 'react';
import { TicTacToeCell } from '../../share';
import { useTicTacToeState } from '../../hooks';
import { CellValue, Player } from '../../types/types';
import classNames from 'classnames';
import { definePalyerStatus } from '../../utils';

import './TicTacToeField.scss';

type Props = {
	player: Player;
};

export const TicTacToeField: React.FC<Props> = ({ player }) => {
	const { values, setValue, currentPlayer, winner, isGameOver, line } = useTicTacToeState((state) => ({
		values: state.values,
		setValue: state.setValue,
		currentPlayer: state.currentPlayer,
		winner: state.winner,
		isGameOver: state.isGameOver,
		line: state.line,
	}));

	const status = useMemo(() => definePalyerStatus(player, currentPlayer, winner, isGameOver), [player, currentPlayer, winner, isGameOver]);
	const winLine = useMemo(() => {
		switch (line) {
			case 'diagonal':
				return <div className="winnerLine w-[3px] h-[280px] myrotate-135 left-[108px]"></div>;
			case 'reverse-diagonal':
				return <div className="winnerLine w-[3px] h-[280px] myrotate-45 left-[108px]"></div>;
			case 'horizontally-top':
				return <div className="winnerLine w-full h-[3px] top-[36px]"></div>;
			case 'horizontally-center':
				return <div className="winnerLine w-full h-[3px] top-[108px]"></div>;
			case 'horizontally-bot':
				return <div className="winnerLine w-full h-[3px] top-[180px]"></div>;
			case 'vertically-left':
				return <div className="winnerLine w-[3px] h-full left-[36px]"></div>;
			case 'vertically-center':
				return <div className="winnerLine w-[3px] h-full left-[108px]"></div>;
			case 'vertically-right':
				return <div className="winnerLine w-[3px] h-full left-[180px] "></div>;
		}
	}, [line]);

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
				{winLine}
			</div>
		</div>
	);
};
