import { PageLayout, ThemeContainer } from '../../share';
import { Textarea } from '../../ui-kit/Textarea';

import './TextareaPage.scss';

export const TextareaPage = () => {
	return (
		<ThemeContainer>
			<PageLayout>
				<Textarea label="Textarea"></Textarea>
			</PageLayout>
		</ThemeContainer>
	);
};
