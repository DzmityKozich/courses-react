import React, { useEffect, useMemo, useState } from 'react';

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

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(message);
		sendMesage(new Message(player, message));
		setMessage('');
	};

	return (
		<div className="chat">
			<div className="chatHeader">
				<div className={classNames('playerAva', `${ava}`)}></div>
				<div className="playerName">{player}</div>
			</div>

			<MessageList messages={messages} player={player} />
			{/* <div className="">
				{messages.map((message) => {
					return (
						<div key={message.sendDate()} className="messageBubble">
							{message.content}
						</div>
					);
				})}
			</div> */}

			<form className="chatInput" onSubmit={submit}>
				<input type="text" className="input" placeholder="Message" value={message} onChange={({ target }) => setMessage(target.value)} />
				<button className="sendBtn"></button>
			</form>
		</div>
	);
};

const MessageList: React.FC<{ messages: Message[]; player: Player }> = ({ messages, player }) => {
	const sortedMessage = useMemo(() => messages.sort((a, b) => b.sendAt - a.sendAt), [messages]);

	return (
		<div className="flex flex-col-reverse overflow-y-auto">
			{sortedMessage.map((message) => {
				return (
					<div key={message.sendDate()} className="messageBubble">
						{message.content}
					</div>
				);
			})}
		</div>
	);
};
