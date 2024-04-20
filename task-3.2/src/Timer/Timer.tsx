import React from 'react';
import './Timer.scss';
import { useTimer } from '../hooks/useTimer';

// Create custom useTimer hook
// that will implement toggleTimer(), startTimer(), resetTimer() methods
// and contain seconts state
// also use useRef hook to store timout key

export const Timer: React.FC<any> = () => {
	const { seconds, resumeTimer, startTimer, stopTimer } = useTimer();

	return (
		<>
			<h1>{seconds}</h1>

			<button onClick={startTimer}>Start</button>
			<button onClick={stopTimer}>Stop</button>
			<button onClick={resumeTimer}>Resume</button>
		</>
	);
};
