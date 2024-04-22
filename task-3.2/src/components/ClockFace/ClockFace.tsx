import React from 'react';

type Props = {
	minutes: number;
	seconds: number;
};

export const ClockFace: React.FC<Props> = ({ seconds, minutes }) => {
	return (
		<h1 className="flex flex-row items-center justify-center">
			<span>{minutes}</span>
			<span className="pb-2">:</span>
			<span>{seconds}</span>
		</h1>
	);
};
