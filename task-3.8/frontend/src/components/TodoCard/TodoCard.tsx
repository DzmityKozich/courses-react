import React, { useState } from 'react';
import { ToDo } from '../../models/enities/ToDo';
import { Checkbox, IconBtn, EditIcon, DeleteIcon, CheckIcon } from 'ui-kit';
import classNames from 'classnames';

import './TodoCard.scss';

type Props = {
	todo: ToDo;
	onTodoUpdate: (todo: ToDo) => void;
};

export const TodoCard: React.FC<Props> = ({ todo, onTodoUpdate }) => {
	const [todoItem, setTodoItem] = useState(todo);
	const [isEdit, setIsEdit] = useState(false);

	const enableEditMode = () => {
		setIsEdit(true);
	};

	const saveChanges = () => {
		// const updated: ToDo = { ...todoItem, isComplete: target.checked };
		setIsEdit(false);
	};

	const toggleComple = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const updated: ToDo = { ...todoItem, isComplete: target.checked };
		setTodoItem(updated);
		onTodoUpdate(updated);
	};

	return (
		<div className="todoCard">
			<Checkbox checked={todo.isComplete} onChange={toggleComple} />
			<div
				className={classNames('todoCardText', { 'line-through': todo.isComplete })}
				// contentEditable={isEdit}
				// onChange={({ target }: any) => {
				// 	console.log(target.value);
				// }}
			>
				{todo.text}
			</div>
			<div className="todoCardActions">
				{!isEdit && <IconBtn icon={<DeleteIcon color="inherit" />} title="Delete" />}
				{!isEdit && !todo.isComplete && <IconBtn icon={<EditIcon color="inherit" />} onClick={enableEditMode} title="Edit" />}
				{isEdit && !todo.isComplete && <IconBtn icon={<CheckIcon color="inherit" />} onClick={saveChanges} title="Save" />}
			</div>
		</div>
	);
};
