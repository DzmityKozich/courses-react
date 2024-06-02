import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Link } from '../../ui-kit/Link';
import { PageLayout } from '../../share';

import './LinkPage.scss';

export const LinkPage: React.FC = () => {
	return (
		<PageLayout>
			<PageTitle title="Links" />

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
		</PageLayout>
	);
};
