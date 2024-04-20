import { useRef, useState } from 'react';
import { useStateFunction } from './useStateFunction';

export function useTimer() {
	const timerId = useRef<number>();
	const startTime = useRef<number>(0);
	const passedSeconds = useRef(0);
	const [seconds, setSeconds] = useState(0);
	// const { state: seconds, setState: setSeconds } = useStateFunction<number>((newValue) => {
	// 	console.log(newValue);
	// 	return +(newValue / 1000).toFixed(2);
	// }, 0);

	const startTimer = () => {
		stopTimer();
		setSeconds(0);
		startTime.current = Date.now();
		timerId.current = setInterval(() => {
			setSeconds(Date.now() - startTime.current);
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(timerId.current);
		timerId.current = undefined;
	};

	const resumeTimer = () => {
		if (!timerId.current) {
			passedSeconds.current = seconds!;
			startTime.current = Date.now();
			timerId.current = setInterval(() => {
				setSeconds(Date.now() - startTime.current + passedSeconds.current);
			}, 1000);
		}
	};

	return { seconds, stopTimer, startTimer, resumeTimer };
}
