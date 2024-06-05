import React, { useMemo } from 'react';
import { Button } from '../../ui-kit';
import { useLocation } from 'react-router-dom';
import { Link } from '../../ui-kit/Link';

import './Navbar.scss';
import { Navigations } from '../../routes/paths';

type Props = {
	changeTheme?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Navbar: React.FC<Props> = ({ changeTheme }) => {
	const location = useLocation();

	const next = useMemo(() => {
		return Navigations[location.pathname.replace('/', '')]?.next || '';
	}, [location]);

	const prev = useMemo(() => {
		return Navigations[location.pathname.replace('/', '')]?.prev || '';
	}, [location]);

	return (
		<div className="w-full p-4 bg-black">
			<div className="flex flex-row justify-between items-center">
				<Link to={prev} disabled={!prev}>
					&lt; Prev
				</Link>

				<Button color="secondary" onClick={changeTheme}>
					Toggle Theme
				</Button>

				<Link to={next} disabled={!next}>
					Next &gt;
				</Link>
			</div>
		</div>
	);
};
