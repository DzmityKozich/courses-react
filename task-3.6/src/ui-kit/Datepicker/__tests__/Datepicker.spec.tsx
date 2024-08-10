import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { Datepicker } from '../Datepicker';
import { getMonthData } from '../utils';
import { fireEvent, screen } from '@testing-library/react';

const mockSelectDate = vi.fn();

describe('Datepicker test', () => {
	it('should render Datepicker', () => {
		const defaultDate = new Date(2021, 1, 1);

		const { queryByText, queryByDisplayValue } = renderWithThemeContext(
			<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />,
		);

		// screen.debug();

		const monthSelect = queryByDisplayValue('February');
		const yearSelect = queryByDisplayValue(defaultDate.getFullYear());
		const selectedDate = queryByText(defaultDate.getDate());

		expect(monthSelect).toBeInTheDocument();
		expect(yearSelect).toBeInTheDocument();
		expect(selectedDate).toBeInTheDocument();
	});

	it('should render datepicker page', () => {
		const defaultDate = new Date(2021, 1, 1);
		const dates = getMonthData(2021, 1);

		const { queryByText } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />);

		for (let week = 0; week < dates.length; week++) {
			for (let day = 0; day < 7; day++) {
				const dateItem = queryByText(dates[week][day].monthDate);
				expect(dateItem).toBeInTheDocument();
			}
		}
	});

	it('should set month', () => {
		const defaultDate = new Date(2024, 1, 1);
		const dates = getMonthData(2024, 9);

		const { getAllByText, queryByText, queryByDisplayValue } = renderWithThemeContext(
			<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />,
		);

		let monthSelect = queryByDisplayValue('February');
		fireEvent.click(monthSelect!);
		const novemberOption = queryByText('November');

		expect(novemberOption).toBeInTheDocument();

		fireEvent.click(novemberOption!);

		monthSelect = queryByDisplayValue('November');
		expect(monthSelect).toBeInTheDocument();

		for (let week = 0; week < dates.length; week++) {
			for (let day = 0; day < 7; day++) {
				const dateItems = getAllByText(dates[week][day].monthDate);
				for (const item of dateItems) {
					expect(item).toBeInTheDocument();
				}
			}
		}
	});

	it('should set year', () => {
		const defaultDate = new Date(2024, 1, 1);
		const dates = getMonthData(2020, 1);

		const { getAllByText, queryByText, queryByDisplayValue } = renderWithThemeContext(
			<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />,
		);

		let yearSelect = queryByDisplayValue(2024);
		fireEvent.click(yearSelect!);
		const yearOption = queryByText(2020);

		expect(yearOption).toBeInTheDocument();

		fireEvent.click(yearOption!);

		yearSelect = queryByDisplayValue(2020);
		expect(yearSelect).toBeInTheDocument();

		for (let week = 0; week < dates.length; week++) {
			for (let day = 0; day < 7; day++) {
				const dateItems = getAllByText(dates[week][day].monthDate);
				for (const item of dateItems) {
					expect(item).toBeInTheDocument();
				}
			}
		}
	});

	it('should open next month', () => {
		const defaultDate = new Date(2024, 1, 1);
		const dates = getMonthData(2024, 2);

		const { getAllByText, queryByDisplayValue, container } = renderWithThemeContext(
			<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />,
		);

		const nextMonthBtn = container.querySelector('button[title="Next month"]');
		let monthSelect = queryByDisplayValue('February');

		expect(nextMonthBtn).toBeInTheDocument();
		expect(monthSelect).toBeInTheDocument();

		fireEvent.click(nextMonthBtn!);

		monthSelect = queryByDisplayValue('March');

		expect(monthSelect).toBeInTheDocument();

		for (let week = 0; week < dates.length; week++) {
			for (let day = 0; day < 7; day++) {
				const dateItems = getAllByText(dates[week][day].monthDate);
				// Убедиться в том, что колличство элементов на UI и в массиве monthData совпадает
				for (const item of dateItems) {
					expect(item).toBeInTheDocument();
				}
			}
		}
	});
});
