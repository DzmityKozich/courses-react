import React from 'react';
import { Player } from '../../types/types';
import { TicTacToeField } from '../TicTacToeField';
import { Chat } from '../Chat';

type Props = {
	player: Player;
};

export const Playgroud: React.FC<Props> = ({ player }) => {
	return (
		<div className="flex flex-col gap-[2rem]">
			<TicTacToeField player={player} />
			<Chat player={player}></Chat>
		</div>
	);
};
