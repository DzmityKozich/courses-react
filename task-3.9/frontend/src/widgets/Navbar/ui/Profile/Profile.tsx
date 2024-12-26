import { authService } from 'shared/auth';
import { useUser } from 'entities/User';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'shared/ui-kit/Dropdown';
import { Menu, MenuItem } from 'shared/ui-kit/Menu';

import './Profile.scss';

export const Profile: React.FC = () => {
	const { user } = useUser();
	const navigate = useNavigate();

	const logout = () => {
		authService.logout();
		navigate('/login');
	};

	return (
		<Dropdown>
			<DropdownButton color="secondary" className="profileBtn">
				{user?.displayName}
				<div className="w-8 h-8 rounded-full overflow-hidden">
					<img src={user?.photoURL || ''} alt="Img" className="object-cover" />
				</div>
			</DropdownButton>

			<Menu>
				<MenuItem onClick={logout}>Logout</MenuItem>
			</Menu>
		</Dropdown>
	);
};
