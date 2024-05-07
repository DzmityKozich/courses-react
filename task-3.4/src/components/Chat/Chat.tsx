import React, { useMemo, useState } from 'react';

import './Chat.scss';
import { Player } from '../../types/types';
import classNames from 'classnames';
import { useChatStore } from '../../hooks';
import { Message } from '../../types/Message';

type Props = {
	player: Player;
};

export const Chat: React.FC<Props> = ({ player }) => {
	const { messages, sendMesage } = useChatStore((state) => ({ messages: state.messages, sendMesage: state.sendMessage }));
	const ava = useMemo(() => (player === 'playerX' ? 'x-ava' : 'o-ava'), [player]);
	const [message, setMessage] = useState('');
	const sortedMessages = useMemo(() => messages.sort((a, b) => b.sendAt - a.sendAt), [messages]);

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		sendMesage(new Message(player, message));
		setMessage('');
	};

	return (
		<div className="chat">
			<div className="chatHeader">
				<div className={classNames('playerAva', `${ava}`)}></div>
				<div className="playerName">{player}</div>
			</div>

			<div className="flex flex-col-reverse overflow-y-auto p-3">
				{sortedMessages.map((message) => {
					return (
						<div key={message.sendAt} className="messageHolder">
							<div
								className={classNames('messageBubble', { right: player === message.sender }, { playerMessage: player === message.sender })}
							>
								<div>{message.content}</div>
								<div className="text-xs text-end">{message.sendDate()}</div>
							</div>
						</div>
					);
				})}
			</div>

			<form className="chatInput" onSubmit={submit}>
				<input type="text" className="input" placeholder="Message" value={message} onChange={({ target }) => setMessage(target.value)} />
				<button className="sendBtn"></button>
			</form>
		</div>
	);
};
