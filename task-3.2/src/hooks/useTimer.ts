import { useCallback, useRef, useState } from 'react';

// NOTE:
// { active: false, reasone: 'start } - timer NOT started yet
export type TimerStatus = {
	active: boolean;
	reason: 'stop' | 'start' | 'resume';
};

export function useTimer() {
	const timerId = useRef<number>();
	const startTime = useRef<number>(0);
	const passedSeconds = useRef(0);
	const [milliseconds, setSeconds] = useState(0);
	const [status, setStatus] = useState<TimerStatus>({ active: false, reason: 'start' });

	const startTimer = useCallback(() => {
		stopTimer();
		setSeconds(0);
		setStatus({ active: true, reason: 'start' });
		startTime.current = Date.now();
		timerId.current = setInterval(() => {
			setSeconds(Date.now() - startTime.current);
		}, 1000);
	}, []);

	const stopTimer = useCallback(() => {
		clearInterval(timerId.current);
		timerId.current = undefined;
		setStatus({ active: false, reason: milliseconds ? 'stop' : 'start' });
	}, [milliseconds]);

	const resumeTimer = useCallback(() => {
		if (!timerId.current && milliseconds) {
			setStatus({ active: true, reason: 'resume' });
			passedSeconds.current = milliseconds!;
			startTime.current = Date.now();
			timerId.current = setInterval(() => {
				setSeconds(Date.now() - startTime.current + passedSeconds.current);
			}, 1000);
		}
	}, [timerId.current, milliseconds]);

	return { status, milliseconds, stopTimer, startTimer, resumeTimer };
}
