import React from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { InputField } from '../../ui-kit/InputField';
import { PasswordInput } from '../../components/PasswordInput';
import { PageTitle } from '../../components/PageTitle';

export const InputFieldPage: React.FC = () => {
	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Input Field</PageTitle>

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
								<InputField type="text" placeholder="Enter your username" label="Username" required />
							</td>
							<td>
								<InputField type="number" placeholder="Amount" label="Amount" startElement={'$'} required />
							</td>
							<td>
								<PasswordInput label="Password" placeholder="Password" required />
							</td>
							<td>Default</td>
						</tr>

						<tr>
							<td>
								<InputField type="text" placeholder="Enter your username" label="Username" defaultValue="email@value.com" required />
							</td>
							<td>
								<InputField type="number" placeholder="Amount" label="Amount" startElement={'$'} defaultValue={123.456} required />
							</td>
							<td>
								<PasswordInput label="Password" placeholder="Password" defaultValue="123456" required />
							</td>
							<td>Filled</td>
						</tr>

						<tr>
							<td>
								<InputField
									type="text"
									placeholder="Enter your username"
									label="Username"
									defaultValue="email@value.com"
									required
									readOnly
								/>
							</td>
							<td>
								<InputField type="number" placeholder="Amount" label="Amount" startElement={'$'} defaultValue={123.456} required disabled />
							</td>
							<td>
								<PasswordInput label="Password" placeholder="Password" defaultValue="123456" required disabled />
							</td>
							<td>Disabled</td>
						</tr>

						<tr>
							<td>
								<InputField
									type="text"
									placeholder="Enter your username"
									label="Username"
									defaultValue="email@value.com"
									required
									error
									helpText="Error message"
								/>
							</td>
							<td>
								<InputField
									type="number"
									placeholder="Amount"
									label="Amount"
									startElement={'$'}
									defaultValue={123.456}
									required
									error
									helpText="Error message"
								/>
							</td>
							<td>
								<PasswordInput label="Password" placeholder="Password" defaultValue="123456" required error helpText="Error message" />
							</td>
							<td>Error</td>
						</tr>
					</tbody>
				</table>
			</PageLayout>
		</ThemeContainer>
	);
};
