import React from 'react';
import styled from 'styled-components';
import { IconBtn } from '../IconBtn';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

import './Datepicker.scss';

const mockDates = new Array(42).fill(0).map((_, i) => ++i);

const DatepickerCard = styled.div`
	/* width: 250px; */
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
`;

const DatepickerBtn = styled.button``;

const DatepickerTable = styled.table`
	& th {
		width: 40px;
		padding: 5px;
	}

	& td {
		padding: 5px;
	}
`;

export const Datepicker: React.FC = () => {
	const splitByWeeks = mockDates.reduce((weeks, date, i) => {
		let lastWeek = weeks.at(-1);
		if (!lastWeek) {
			lastWeek = [];
			weeks.push(lastWeek);
		}
		if (lastWeek.length < 7) {
			lastWeek.push(date);
		} else {
			lastWeek = [date];
			weeks.push(lastWeek);
		}
		return weeks;
	}, [] as number[][]);

	console.log({ splitByWeeks });

	return (
		<DatepickerCard>
			<DatepickerCardHeader>
				<div className="">
					<DatepickerBtn>November</DatepickerBtn>
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
					{splitByWeeks.map((week, i) => (
						<tr key={i}>
							{week.map((date) => (
								<td key={date} className="text-center">
									<div className="holder active">{date}</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</DatepickerTable>
		</DatepickerCard>
	);
};
