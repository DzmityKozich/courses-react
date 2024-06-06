import React, { useMemo } from 'react';
import { Button } from '../../ui-kit';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from '../../ui-kit/Link';

import './Navbar.scss';
import { Navigations, Paths } from '../../routes/paths';
import { Dropdown } from '../../ui-kit/Dropdown';
import { DropdownButton } from '../../ui-kit/DropdownButton/DropdownButton';
import { Menu } from '../../ui-kit/Menu';
import { MenuItem } from '../../ui-kit/MenuItem/MenuItem';
import { ArrowDown } from '../../ui-kit/icons/ArrowDown';

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
				<Link to={prev} disabled={!prev}>
					&lt; Prev
				</Link>

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

				<Link to={next} disabled={!next}>
					Next &gt;
				</Link>
			</div>
		</div>
	);
};
