import { useCallback, useMemo, useState } from 'react';
import { DatepickerDate } from './DatepikerDate';
import { KitDatepicker } from './types';
import { isFirstAvailableMonth, getYearList, isLastAvailableMonth } from './utils';

type Props = Omit<KitDatepicker, 'selectDate'>;

export const useDatepicker = ({ defaultDate = new Date(), firstYear = 1990, lastYear = 2030 }: Props) => {
	const [date, setDate] = useState(new DatepickerDate(defaultDate));
	const [month, setMonth] = useState(defaultDate.getMonth());
	const [year, setYear] = useState(defaultDate.getFullYear());

	const years = useMemo(() => {
		return getYearList(firstYear, lastYear);
	}, [firstYear, lastYear]);

	const isLastMonth = useMemo(() => {
		return isLastAvailableMonth(year, lastYear, month);
	}, [month, year, lastYear]);

	const isFirstMonth = useMemo(() => {
		return isFirstAvailableMonth(year, firstYear, month);
	}, [month, year, firstYear]);

	const nextMonth = useCallback(() => {
		if (isLastAvailableMonth(year, lastYear, month)) return;
		if (month === 11) {
			setMonth(0);
			setYear((year) => year + 1);
		} else {
			setMonth((month) => month + 1);
		}
	}, [month, year, lastYear]);

	const prevMonth = useCallback(() => {
		if (isFirstAvailableMonth(year, firstYear, month)) return;
		if (month === 0) {
			setMonth(11);
			setYear((year) => year - 1);
		} else {
			setMonth((month) => month - 1);
		}
	}, [month, year, firstYear]);

	return { month, setMonth, year, setYear, date, setDate, nextMonth, prevMonth, years, isLastMonth, isFirstMonth };
};
