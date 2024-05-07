import { create } from 'zustand';
import { CellValue, Player, Score, WinnerLine } from '../types/types';

interface TicTacToeState {
	currentPlayer: Player;
	values: (CellValue | null)[];
	winner: Player | null;
	score: Score;
	isGameOver: boolean;
	line: WinnerLine | null;
	reset: () => void;
	setValue: (index: number, value: CellValue) => void;
	resetScore: () => void;
}

export const useTicTacToeState = create<TicTacToeState>((set) => ({
	currentPlayer: 'playerX',
	values: Array(9).fill(null),
	winner: null,
	score: { playerO: 0, playerX: 0 },
	isGameOver: false,
	line: null,
	reset: () => {
		set({ values: Array(9).fill(null), currentPlayer: 'playerX', winner: null, isGameOver: false, line: null });
	},
	resetScore: () => set(() => ({ score: { playerO: 0, playerX: 0 } })),
	setValue: (index, value) =>
		set((state) => {
			const currentPlayer: Player = state.currentPlayer === 'playerX' ? 'playerO' : 'playerX';
			const values = [...state.values];
			values[index] = value;
			const [winner, line] = calculateWinner(values);
			const isGameOver = checkGameStatus(winner, values);
			const score = calculateScore(isGameOver, winner, state.score);
			return { values, currentPlayer, winner, isGameOver, score, line };
		}),
}));

const winCombinetions: { lineIndexes: number[]; line: WinnerLine }[] = [
	{ lineIndexes: [0, 1, 2], line: 'horizontally-top' },
	{ lineIndexes: [3, 4, 5], line: 'horizontally-center' },
	{ lineIndexes: [6, 7, 8], line: 'horizontally-bot' },
	{ lineIndexes: [0, 3, 6], line: 'vertically-left' },
	{ lineIndexes: [1, 4, 7], line: 'vertically-center' },
	{ lineIndexes: [2, 5, 8], line: 'vertically-right' },
	{ lineIndexes: [0, 4, 8], line: 'diagonal' },
	{ lineIndexes: [2, 4, 6], line: 'reverse-diagonal' },
];

function calculateScore(isGameOver: boolean, winner: Player | null, score: Score): Score {
	if (isGameOver && winner) {
		return { ...score, [winner]: ++score[winner] };
	}
	return score;
}

function checkGameStatus(winner: Player | null, values: (CellValue | null)[]) {
	if (winner) return true;
	return values.every((val) => !!val);
}

function calculateWinner(values: (CellValue | null)[]): [Player | null, WinnerLine | null] {
	for (let i = 0; i < winCombinetions.length; i++) {
		const [a, b, c] = winCombinetions[i].lineIndexes;
		if (values[a] && values[a] === values[b] && values[a] === values[c]) {
			return [values[a] === 'o' ? 'playerO' : 'playerX', winCombinetions[i].line];
		}
	}
	return [null, null];
}
