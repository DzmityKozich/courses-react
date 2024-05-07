import { Player } from './types/types';

export function definePalyerStatus(player: Player, currentPlayer: Player, winner: Player | null, isGameOver: boolean): string {
	if (winner === player) return 'You win!';
	if (!winner && isGameOver) return 'Draw!';
	if (!winner) {
		if (currentPlayer === player) return 'Your turn:';
		return 'Wait your opponent.';
	}
	if (winner !== player) return 'You lost!';
	return 'Draw!';
}
