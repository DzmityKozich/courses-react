import React from 'react';
import { ToDo } from '../../models/enities/ToDo';
import { Checkbox } from 'ui-kit';
import classNames from 'classnames';

import './TodoCard.scss';

type Props = {
	todo: ToDo;
	onCompleteToggle: (complete: boolean) => void;
};

export const TodoCard: React.FC<Props> = ({ todo, onCompleteToggle }) => {
	return (
		<div className="todoCard">
			<Checkbox checked={todo.isComplete} onChange={({ target }) => onCompleteToggle(target.checked)} />
			<div className={classNames('todoCardText', { 'line-through': todo.isComplete })}>{todo.text}</div>
		</div>
	);
};
