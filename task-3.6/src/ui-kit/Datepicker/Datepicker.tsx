import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { IconBtn } from '../IconBtn';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import { DatepickerDate } from './DatepikerDate';
import { getMonthData } from './utils';
import classNames from 'classnames';

import './Datepicker.scss';

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

const DatepickerBtn = styled.button`
	background-color: transparent;
	font-weight: 700;

	&:active {
		background-color: #ccc;
	}
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

export const Datepicker: React.FC = () => {
	const [date, setDate] = useState(new DatepickerDate());
	const dates = useMemo(() => {
		return getMonthData(date.year, date.month);
	}, [date]);

	const selectDate = (date: DatepickerDate) => {
		setDate(date);
	};

	return (
		<DatepickerCard>
			<DatepickerCardHeader>
				<div className="pl-[5px]">
					<DatepickerBtn className="mr-1">November</DatepickerBtn>
					<DatepickerBtn>2024</DatepickerBtn>
				</div>
				<div className="">
					<IconBtn icon={<ChevronLeftIcon color="inherit" />} />
					<IconBtn icon={<ChevronRightIcon color="inherit" />} />
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
										onClick={() => selectDate(d)}
										disabled={!d.isDayOfMonth(date.year, date.month)}
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
