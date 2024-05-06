import { create } from 'zustand';
import { CellValue, Player } from '../types/types';

interface TicTacToeState {
	currentPlayer: Player;
	values: (CellValue | null)[];
	reset: () => void;
	setValue: (index: number, value: CellValue) => void;
	winner: Player | null;
}

export const useTicTacToeState = create<TicTacToeState>((set) => ({
	currentPlayer: 'playerX',
	values: Array(9).fill(null),
	winner: null,
	reset: () => {
		set({ values: Array(9).fill(null), currentPlayer: 'playerX', winner: null });
	},
	setValue: (index, value) =>
		set((state) => {
			const currentStep: Player = state.currentPlayer === 'playerX' ? 'playerO' : 'playerX';
			const cloneValues = [...state.values];
			cloneValues.splice(index, 1, value);
			return { values: cloneValues, currentPlayer: currentStep, winner: calculateWinner(cloneValues) };
		}),
}));

function calculateWinner(values: (CellValue | null)[]): Player | null {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (values[a] && values[a] === values[b] && values[a] === values[c]) {
			return values[a] === 'o' ? 'playerO' : 'playerX';
		}
	}
	return null;
}
