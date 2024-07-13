import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IconBtn } from '../IconBtn';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import { DatepickerDate } from './DatepikerDate';
import { getMonthData } from './utils';
import classNames from 'classnames';
import { months } from './constants';
import { useDatepicker } from '../hooks/useDatepicker';
import { KitDatepicker } from './types';
import { Select } from '../Select';
import { MenuItem } from '../MenuItem';

import './Datepicker.scss';

// TODO: update for themes
const DatepickerCard = styled.div`
	box-shadow: 0px 4px 4px 0px #0000001a;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0.75rem 0.25rem;
	border-radius: 8px;
`;

const DatepickerCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const DatepickerTable = styled.table`
	& th {
		width: 40px;
		padding: 5px;
	}

	& td {
		padding: 5px;
	}
`;

const DateBtn = styled.button`
	width: 24px;
	height: 24px;
	border-radius: 8px;
	margin: auto;
	background-color: transparent;

	&.selected {
		background-color: #00ae1c;
		color: #fff;
		font-weight: 700;
	}

	&:disabled {
		opacity: 0.2;
	}
`;

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
