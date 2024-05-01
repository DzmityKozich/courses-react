import React, { ReactNode } from 'react';
import { ValidationError } from '../../../types';

type Props = {
	control: ReactNode;
	errors?: ValidationError[];
};

export const ControlField: React.FC<Props> = ({ control, errors }) => {
	return (
		<div className="flex flex-col items-start">
			{control}
			{errors &&
				errors.map((error) => {
					const [key, message] = Object.entries(error)[0];
					return (
						<span key={key} className="text-sm text-red-500">
							{message}
						</span>
					);
				})}
		</div>
	);
};
