import React from 'react';

import './TodoSearch.scss';

export const TodoSearch: React.FC = () => {
	return (
		<div className="todoSearch">
			<div className="search">
				<input type="text" />
			</div>

			<div className="actions">
				<button>Add</button>
			</div>
		</div>
	);
};
