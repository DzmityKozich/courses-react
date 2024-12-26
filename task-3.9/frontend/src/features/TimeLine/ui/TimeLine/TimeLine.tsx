import React, { useEffect, useRef, useState } from 'react';
import { getTimeLinePosition } from '../../lib/time-line-position';
import { useSelectedDate } from 'entities/CalendarDate';

import './TimeLine.scss';

export const TimeLine: React.FC = () => {
	const interval = useRef<number | undefined>();
	const [top, setTop] = useState(getTimeLinePosition(new Date()));
	const { selectedDate } = useSelectedDate();

	useEffect(() => {
		if (selectedDate.isToday()) {
			interval.current = setInterval(() => {
				setTop(getTimeLinePosition(new Date()));
			}, 60 * 1000);
		}
	}, [setTop, selectedDate]);

	if (!selectedDate.isToday()) {
		return <></>;
	}

	return (
		<div className="timeLineContainer" style={{ top }}>
			<div className="timeLine"></div>
		</div>
	);
};
