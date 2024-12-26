import { TimeItem } from '../model/TimeItem';

export const minArray = [0, 15, 30, 45];

const getTimeArray = () => {
	const times: TimeItem[] = [];
	for (let hour = 0; hour < 24; hour++) {
		for (const min of minArray) {
			times.push(new TimeItem(hour, min));
		}
	}
	return [...times, new TimeItem(24, 0)];
};

export const timeOptions = getTimeArray();
