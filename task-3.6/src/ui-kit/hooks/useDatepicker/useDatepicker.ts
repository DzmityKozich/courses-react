import { useState } from 'react';

export const useDatepicker = (date: Date = new Date()) => {
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());

	return { month, setMonth, year, setYear };
};
