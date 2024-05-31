import React from 'react';
import './Navbar.scss';
import { Button } from '../../ui-kit';

type Props = {
	changeTheme?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Navbar: React.FC<Props> = ({ changeTheme }) => {
	return (
		<div className="w-full p-4 bg-black">
			<div className="flex flex-row-reverse">
				<Button color="secondary" onClick={changeTheme}>
					Toggle Theme
				</Button>
			</div>
		</div>
	);
};
