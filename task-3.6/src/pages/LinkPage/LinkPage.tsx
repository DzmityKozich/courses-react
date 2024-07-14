import React from 'react';
import { PageTitle } from '../../share/PageTitle';
import { Link } from '../../ui-kit/Link';
import { PageLayout, ThemeContainer } from '../../share';

import './LinkPage.scss';

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
								<Link to="">Link</Link>
							</td>
							<td>Default</td>
						</tr>

						<tr>
							<td>
								<Link to="" disabled>
									Link
								</Link>
							</td>
							<td>Disabled</td>
						</tr>
					</tbody>
				</table>
			</ThemeContainer>
		</PageLayout>
	);
};
