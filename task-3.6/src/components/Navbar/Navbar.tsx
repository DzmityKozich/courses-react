import React, { useMemo } from 'react';
import { Button } from '../../ui-kit';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from '../../ui-kit/Link';
import { Navigations, Paths } from '../../routes/paths';
import { Dropdown, DropdownButton } from '../../ui-kit/Dropdown';
import { Menu, MenuItem } from '../../ui-kit/Menu';
import { ArrowDown } from '../../ui-kit/icons/ArrowDown';

import './Navbar.scss';

type Props = {
	changeTheme?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Navbar: React.FC<Props> = ({ changeTheme }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const next = useMemo(() => {
		return Navigations[location.pathname.replace('/', '')]?.next || '';
	}, [location]);

	const prev = useMemo(() => {
		return Navigations[location.pathname.replace('/', '')]?.prev || '';
	}, [location]);

	const goTo = (path: string) => {
		navigate(`/${path}`);
	};

	return (
		<div className="w-full p-4 bg-black">
			<div className="flex flex-row justify-between items-center">
				<NavLink to={prev}>
					<Link disabled={!prev}>&lt; Prev</Link>
				</NavLink>

				<div className="flex gap-3">
					<Button color="secondary" onClick={changeTheme}>
						Toggle Theme
					</Button>

					<Dropdown>
						<DropdownButton color="primary" endIcon={<ArrowDown color="inherit" />}>
							Go to
						</DropdownButton>
						<Menu>
							{Object.entries(Paths).map(([key, path]) => (
								<MenuItem key={key} onClick={() => goTo(path)}>
									<span className="capitalize">{key}</span>
								</MenuItem>
							))}
						</Menu>
					</Dropdown>
				</div>

				<NavLink to={next}>
					<Link disabled={!next}>Next &gt;</Link>
				</NavLink>
			</div>
		</div>
	);
};
