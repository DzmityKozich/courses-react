import React, { useState } from 'react';
import { PageLayout, ThemeContainer } from '../../share';
import { PageTitle } from '../../components/PageTitle';
import { Colorpicker, defaultColors } from '../../ui-kit/Colorpicker';

export const ColorpickerPage: React.FC = () => {
	const [color, setColor] = useState('');

	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle style={{ color }}>Colorpicker</PageTitle>

				<Colorpicker colors={defaultColors} selectColor={(color) => setColor(color)} defaultColor={color} />
			</PageLayout>
		</ThemeContainer>
	);
};
