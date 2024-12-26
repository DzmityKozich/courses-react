import { TimerStatus } from '../../hooks/useTimer';

import './TimerControls.scss';

type Props = {
	startTimer: VoidFunction;
	stopTimer: VoidFunction;
	resumeTimer: VoidFunction;
	status: TimerStatus;
};

export const TimerControl: React.FC<Props> = ({ startTimer, stopTimer, resumeTimer, status }) => {
	return (
		<div className="flex flex-row gap-4">
			<button className="oldFashoiBtn start" title="start" onClick={startTimer}>
				Start
			</button>
			<button className="oldFashoiBtn stop" title="stop" disabled={!status.active} onClick={stopTimer}>
				Stop
			</button>
			<button className="oldFashoiBtn resume" title="resume" disabled={['start', 'resume'].includes(status.reason)} onClick={resumeTimer}>
				Resume
			</button>
		</div>
	);
};
