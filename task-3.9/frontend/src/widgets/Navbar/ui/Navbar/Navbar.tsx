import React from 'react';
import { CalendarNavigation } from '../CalendarNavigation';
import { Profile } from '../Profile';
import { Logo } from 'features/Logo';

import './Navbar.scss';

export const Navbar: React.FC = () => {
	return (
		<div className="navbar">
			<div className="navbarSegment">
				<Logo />
				<CalendarNavigation />
			</div>

			<Profile />
		</div>
	);
};
