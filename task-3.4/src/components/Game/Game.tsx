import React, { useEffect } from 'react';
import { Playgroud } from '../Playground';

import './Game.scss';
import { useTicTacToeState } from '../../hooks';

export const Game: React.FC = () => {
	const { score, restScore, isGameOver, reset } = useTicTacToeState((state) => ({
		score: state.score,
		restScore: state.resetScore,
		isGameOver: state.isGameOver,
		reset: state.reset,
	}));

	useEffect(() => {
		if (isGameOver) {
			setTimeout(() => {
				reset();
			}, 5000);
		}
	}, [isGameOver]);

	const fullReset = () => {
		reset();
		restScore();
	};

	return (
		<>
			<div className="gameHeader">
				<div className="gameScore">
					Score {score.playerX}:{score.playerO}
				</div>
				<button className="resetBtn" onClick={fullReset}>
					reset
				</button>
			</div>

			<div className="gameField">
				<div className="playground">
					<Playgroud player="playerX" />
				</div>
				<div className="playground">
					<Playgroud player="playerO" />
				</div>
			</div>
		</>
	);
};
