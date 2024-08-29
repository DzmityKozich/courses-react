import React from 'react';
import { Button } from 'ui-kit';

import './TodoSearch.scss';

export const TodoSearch: React.FC = () => {
	return (
		<form className="todoForm">
			<div className="todoFormInput">
				<input type="text" placeholder="Type here to add a task..." />
			</div>

			<div className="actions">
				<Button color="primary" type="submit">
					Add
				</Button>
			</div>
		</form>
	);
};
