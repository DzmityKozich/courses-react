import { PageTitle } from '../../share/PageTitle';
import { PageLayout, ThemeContainer } from '../../share';
import { Button } from '../../ui-kit';
import { PlayIcon } from '../../ui-kit/icons';

import './ButtonPage.scss';

export const ButtonPage: React.FC = () => {
	return (
		<PageLayout>
			<PageTitle>Buttons</PageTitle>

			<ThemeContainer>
				<table className="table">
					<thead>
						<tr>
							<th>Primary</th>
							<th>Primary with icon</th>
							<th>Secondary</th>
							<th>Secondary with icon</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								<Button color="primary">Button</Button>
							</td>
							<td>
								<Button color="primary" startIcon={<PlayIcon color="inherit" />}>
									Button
								</Button>
							</td>
							<td>
								<Button color="secondary">Button</Button>
							</td>
							<td>
								<Button color="secondary" startIcon={<PlayIcon color="inherit" />}>
									Button
								</Button>
							</td>
							<td>Default</td>
						</tr>

						<tr>
							<td>
								<Button disabled color="primary">
									Button
								</Button>
							</td>
							<td>
								<Button disabled color="primary" startIcon={<PlayIcon color="inherit" />}>
									Button
								</Button>
							</td>
							<td>
								<Button disabled color="secondary">
									Button
								</Button>
							</td>
							<td>
								<Button disabled color="secondary" startIcon={<PlayIcon color="inherit" />}>
									Button
								</Button>
							</td>
							<td>Disabled</td>
						</tr>
					</tbody>
				</table>
			</ThemeContainer>
		</PageLayout>
	);
};
