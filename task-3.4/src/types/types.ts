export type CellValue = 'x' | 'o';
export type Player = 'playerX' | 'playerO';
export type Score = Record<Player, number>;
export type WinnerLine =
	| 'vertically-left'
	| 'vertically-center'
	| 'vertically-right'
	| 'horizontally-top'
	| 'horizontally-center'
	| 'horizontally-bot'
	| 'diagonal'
	| 'reverse-diagonal';
