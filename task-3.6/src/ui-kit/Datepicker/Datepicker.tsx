import React, { useMemo } from 'react';
import { IconBtn } from '../IconBtn';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import { DatepickerDate } from './DatepikerDate';
import { getMonthData } from './utils';
import classNames from 'classnames';
import { months } from './constants';
import { useDatepicker } from './useDatepicker';
import { KitDatepicker } from './types';
import { Select } from '../Select';
import { MenuItem } from '../Menu';

import './Datepicker.scss';
import { DateBtn, DatepickerCard, DatepickerCardHeader, DatepickerTable } from './styled-components';

export const Datepicker: React.FC<KitDatepicker> = ({ defaultDate, selectDate, lastYear, firstYear }) => {
	const { month, setMonth, setYear, year, date, setDate, prevMonth, nextMonth, years, isFirstMonth, isLastMonth } = useDatepicker({
		defaultDate,
		firstYear,
		lastYear,
	});

	const dates = useMemo(() => {
		return getMonthData(year, month);
	}, [year, month]);

	const handleDateSelect = (date: DatepickerDate) => {
		setDate(date);
		selectDate(date.toDate());
	};

	return (
		<DatepickerCard>
			<DatepickerCardHeader>
				<div className="pl-[5px] dateSelectionPanel">
					<Select select={(value) => setMonth(+value)} value={month} className="datepickerSelect">
						{months.map((month, i) => (
							<MenuItem value={i} key={i}>
								{month}
							</MenuItem>
						))}
					</Select>

					<Select select={(value) => setYear(+value)} value={year} className="datepickerSelect">
						{years.map((year, i) => (
							<MenuItem value={year} key={i}>
								{year}
							</MenuItem>
						))}
					</Select>
				</div>
				<div className="">
					<IconBtn icon={<ChevronLeftIcon color="inherit" />} onClick={prevMonth} disabled={isFirstMonth} title="Previous month" />
					<IconBtn icon={<ChevronRightIcon color="inherit" />} onClick={nextMonth} disabled={isLastMonth} title="Next month" />
				</div>
			</DatepickerCardHeader>

			<DatepickerTable>
				<thead>
					<tr>
						<th>Mo</th>
						<th>Tu</th>
						<th>We</th>
						<th>Th</th>
						<th>Fr</th>
						<th>Sa</th>
						<th>Su</th>
					</tr>
				</thead>

				<tbody>
					{dates.map((week, i) => (
						<tr key={i}>
							{week.map((d) => (
								<td key={d.timestamp} className="text-center">
									<DateBtn
										className={classNames({ selected: d.isSameDate(date) })}
										onClick={() => handleDateSelect(d)}
										disabled={!d.isDayOfMonth(year, month)}
									>
										{d.monthDate}
									</DateBtn>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</DatepickerTable>
		</DatepickerCard>
	);
};
