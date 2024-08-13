import React from 'react';
import { PageTitle } from '../../share/PageTitle';
import { Link } from '../../ui-kit/Link';
import { PageLayout, ThemeContainer } from '../../share';

import './LinkPage.scss';
import { NavLink } from 'react-router-dom';

export const LinkPage: React.FC = () => {
	return (
		<PageLayout>
			<PageTitle>Links</PageTitle>

			<ThemeContainer>
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								<NavLink to="">
									<Link>Link</Link>
								</NavLink>
							</td>
							<td>Default</td>
						</tr>

						<tr>
							<td>
								<NavLink to="">
									<Link disabled>Link</Link>
								</NavLink>
							</td>
							<td>Disabled</td>
						</tr>
					</tbody>
				</table>
			</ThemeContainer>
		</PageLayout>
	);
};
