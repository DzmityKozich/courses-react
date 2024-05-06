import React, { useMemo } from 'react';

import './Chat.scss';
import { Player } from '../../types/types';
import classNames from 'classnames';

type Props = {
	player: Player;
};

export const Chat: React.FC<Props> = ({ player }) => {
	const ava = useMemo(() => (player === 'playerX' ? 'x-ava' : 'o-ava'), [player]);

	return (
		<div className="chat">
			<div className="chatHeader">
				<div className={classNames('playerAva', `${ava}`)}></div>
				<div className="playerName">{player}</div>
			</div>

			<div className="">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aspernatur obcaecati quas animi delectus labore similique iste sit
				rerum. Repudiandae temporibus quidem, numquam totam doloremque deserunt dolores aut quo quaerat exercitationem voluptatibus nemo
				facilis dignissimos provident ducimus, optio laudantium nesciunt animi necessitatibus adipisci rem. Aliquid animi maiores magnam
				consequuntur itaque.
			</div>

			<div className="chatInput">
				<input />
			</div>
		</div>
	);
};
