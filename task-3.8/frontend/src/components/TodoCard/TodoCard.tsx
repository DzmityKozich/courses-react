import React, { useState } from 'react';
import { ToDo } from '../../models/enities/ToDo';
import { Checkbox, IconBtn, EditIcon, DeleteIcon, CheckIcon, Textarea } from 'ui-kit';
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
		setIsEdit(false);
		onTodoUpdate(todoItem);
	};

	const toggleComple = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const updated: ToDo = { ...todoItem, isComplete: target.checked };
		setTodoItem(updated);
		onTodoUpdate(updated);
	};

	const handleTextChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTodoItem({ ...todoItem, text: target.value });
	};

	return (
		<div className="todoCard">
			<Checkbox checked={todoItem.isComplete} onChange={toggleComple} />
			<div className="todoCardText">
				<Textarea
					className={classNames('todoText', { 'line-through': todoItem.isComplete })}
					value={todoItem.text}
					onChange={handleTextChange}
					rows={5}
					readOnly={!isEdit}
				/>
			</div>
			<div className="todoCardActions">
				{!isEdit && <IconBtn icon={<DeleteIcon color="inherit" />} title="Delete" />}
				{!isEdit && !todoItem.isComplete && <IconBtn icon={<EditIcon color="inherit" />} onClick={enableEditMode} title="Edit" />}
				{isEdit && !todoItem.isComplete && <IconBtn icon={<CheckIcon color="inherit" />} onClick={saveChanges} title="Save" />}
			</div>
		</div>
	);
};
