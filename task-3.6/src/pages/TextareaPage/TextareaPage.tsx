import { PageTitle } from '../../share/PageTitle';
import { PageLayout, ThemeContainer } from '../../share';
import { Textarea } from '../../ui-kit/Textarea';

import './TextareaPage.scss';

export const TextareaPage = () => {
	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Textarea</PageTitle>

				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								<Textarea label="Textarea" placeholder="Bio"></Textarea>
							</td>
							<td>Default</td>
						</tr>

						<tr>
							<td>
								<Textarea label="Textarea" defaultValue="Bio"></Textarea>
							</td>
							<td>Filled</td>
						</tr>

						<tr>
							<td>
								<Textarea label="Textarea" defaultValue="Bio" disabled></Textarea>
							</td>
							<td>Disabled</td>
						</tr>

						<tr>
							<td>
								<Textarea label="Textarea" defaultValue="Bio" error helpText="Error here"></Textarea>
							</td>
							<td>Error</td>
						</tr>
					</tbody>
				</table>
			</PageLayout>
		</ThemeContainer>
	);
};
