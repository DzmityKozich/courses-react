import React, { useState } from 'react';
import { Button, PlusIcon } from 'ui-kit';

import './AddTodoForm.scss';

type Props = {
	onFormSubmit: (text: string) => void;
};

export const AddTodoForm: React.FC<Props> = ({ onFormSubmit }) => {
	const [text, setText] = useState('');

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onFormSubmit(text);
		setText('');
	};

	const change = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setText(target.value);
	};

	return (
		<form className="todoForm" onSubmit={submit}>
			<div className="todoFormInput">
				<input type="text" placeholder="Type here to add a task..." value={text} onChange={change} />
			</div>

			<div className="actions">
				<Button color="primary" type="submit" startIcon={<PlusIcon color="inherit" />}>
					Add
				</Button>
			</div>
		</form>
	);
};
