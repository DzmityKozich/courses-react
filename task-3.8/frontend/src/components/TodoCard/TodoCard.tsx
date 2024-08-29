import React from 'react';

import './TodoCard.scss';
import { ToDo } from '../../models/enities/ToDo';

type Props = {
	todo: ToDo;
};

export const TodoCard: React.FC<Props> = ({ todo }) => {
	return (
		<div className="todoCard">
			<div className="todoCardText">{todo.text}</div>
		</div>
	);
};
