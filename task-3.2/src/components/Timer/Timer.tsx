import React, { useEffect, useMemo, useRef } from 'react';
import { useTimer } from '../../hooks/useTimer';
import { ClockFace } from '../ClockFace';
import { TimerControl } from '../TimerControls';

import './Timer.scss';

function formatTime(milliseconds: number): { minutes: number; seconds: number } {
	const totalSeconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return { minutes, seconds };
}

export const Timer: React.FC<any> = () => {
	const render = useRef(0);
	const { milliseconds, resumeTimer, startTimer, stopTimer, status } = useTimer();
	const { minutes, seconds } = useMemo(() => formatTime(milliseconds), [milliseconds]);

	useEffect(() => {
		render.current++;
	});

	return (
		<>
			<div className="flex flex-col justify-center gap-4 items-center">
				<div>Number of component renders: {render.current}</div>
				<ClockFace minutes={minutes} seconds={seconds}></ClockFace>
				<TimerControl startTimer={startTimer} stopTimer={stopTimer} resumeTimer={resumeTimer} status={status}></TimerControl>
			</div>
		</>
	);
};
