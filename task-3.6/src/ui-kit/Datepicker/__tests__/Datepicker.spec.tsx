import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { Datepicker } from '../Datepicker';
import { getMonthData } from '../utils';
import { fireEvent } from '@testing-library/react';
import { DatepickerDate } from '../DatepikerDate';

const mockSelectDate = vi.fn();

const expectMonthDataToHaveBeenRendered = (monthData: DatepickerDate[][], container: HTMLElement) => {
	for (let week = 0; week < monthData.length; week++) {
		for (let day = 0; day < 7; day++) {
			const date = monthData[week][day];
			const dateItem = container.querySelector(`td[data-timestamp="${date.timestamp}"]`);
			expect(dateItem).toBeInTheDocument();
		}
	}
};

describe('Datepicker test', () => {
	it('should render Datepicker', () => {
		const defaultDate = new Date(2021, 1, 1);

		const { queryByText, queryByDisplayValue } = renderWithThemeContext(
			<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />,
		);

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

		const { container } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />);

		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should set month', () => {
		const defaultDate = new Date(2024, 1, 1);
		const dates = getMonthData(2024, 10);

		const { container, queryByText, queryByDisplayValue } = renderWithThemeContext(
			<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />,
		);

		const monthSelect = queryByDisplayValue('February');
		fireEvent.click(monthSelect!);
		const novemberOption = queryByText('November');

		expect(novemberOption).toBeInTheDocument();

		fireEvent.click(novemberOption!);

		expect(monthSelect).toHaveDisplayValue('November');
		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should set year', () => {
		const defaultDate = new Date(2024, 1, 1);
		const dates = getMonthData(2020, 1);

		const { container, queryByText, queryByDisplayValue } = renderWithThemeContext(
			<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />,
		);

		const yearSelect = queryByDisplayValue(2024);
		fireEvent.click(yearSelect!);
		const yearOption = queryByText(2020);

		expect(yearOption).toBeInTheDocument();

		fireEvent.click(yearOption!);

		expect(yearSelect).toHaveDisplayValue('2020');
		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should open next month', () => {
		const defaultDate = new Date(2024, 1, 1);
		const dates = getMonthData(2024, 2);

		const { queryByDisplayValue, container } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />);

		const nextMonthBtn = container.querySelector('button[title="Next month"]');
		const monthSelect = queryByDisplayValue('February');

		expect(nextMonthBtn).toBeInTheDocument();
		expect(monthSelect).toBeInTheDocument();

		fireEvent.click(nextMonthBtn!);

		expect(monthSelect).toHaveDisplayValue('March');
		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should open next month and year', () => {
		const defaultDate = new Date(2024, 11, 1);
		const dates = getMonthData(2025, 0);

		const { queryByDisplayValue, container } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />);

		const nextMonthBtn = container.querySelector('button[title="Next month"]');
		const monthSelect = queryByDisplayValue('December');
		const yearSelect = queryByDisplayValue('2024');

		expect(nextMonthBtn).toBeInTheDocument();
		expect(monthSelect).toBeInTheDocument();

		fireEvent.click(nextMonthBtn!);

		expect(monthSelect).toHaveDisplayValue('January');
		expect(yearSelect).toHaveDisplayValue('2025');
		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should NOT open next month', () => {
		const defaultDate = new Date(2030, 11, 1);
		const dates = getMonthData(2030, 11);

		const { queryByDisplayValue, container } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />);

		const nextMonthBtn = container.querySelector('button[title="Next month"]');
		const monthSelect = queryByDisplayValue('December');
		const yearSelect = queryByDisplayValue('2030');

		expect(nextMonthBtn).toBeInTheDocument();
		expect(monthSelect).toBeInTheDocument();

		fireEvent.click(nextMonthBtn!);

		expect(monthSelect).not.toHaveDisplayValue('January');
		expect(monthSelect).toHaveDisplayValue('December');
		expect(yearSelect).toHaveDisplayValue('2030');
		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should open previous month', () => {
		const defaultDate = new Date(2024, 1, 1);
		const dates = getMonthData(2024, 0);

		const { queryByDisplayValue, container } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />);

		const prevMonthBtn = container.querySelector('button[title="Previous month"]');
		const monthSelect = queryByDisplayValue('February');

		expect(prevMonthBtn).toBeInTheDocument();
		expect(monthSelect).toBeInTheDocument();

		fireEvent.click(prevMonthBtn!);

		expect(monthSelect).toHaveDisplayValue('January');
		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should open previous month and year', () => {
		const defaultDate = new Date(2024, 0, 1);
		const dates = getMonthData(2023, 11);

		const { queryByDisplayValue, container } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />);

		const prevMonthBtn = container.querySelector('button[title="Previous month"]');
		const monthSelect = queryByDisplayValue('January');
		const yearSelect = queryByDisplayValue('2024');

		expect(prevMonthBtn).toBeInTheDocument();
		expect(monthSelect).toBeInTheDocument();

		fireEvent.click(prevMonthBtn!);

		expect(monthSelect).toHaveDisplayValue('December');
		expect(yearSelect).toHaveDisplayValue('2023');
		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should NOT open previous month', () => {
		const defaultDate = new Date(1990, 0, 1);
		const dates = getMonthData(1990, 0);

		const { queryByDisplayValue, container } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={defaultDate} />);

		const prevMonthBtn = container.querySelector('button[title="Previous month"]');
		const monthSelect = queryByDisplayValue('January');

		expect(prevMonthBtn).toBeInTheDocument();
		expect(monthSelect).toBeInTheDocument();

		fireEvent.click(prevMonthBtn!);

		expect(monthSelect).not.toHaveDisplayValue('December');
		expect(monthSelect).toHaveDisplayValue('January');
		expectMonthDataToHaveBeenRendered(dates, container);
	});

	it('should select date', () => {
		const currentDate = new Date(2024, 1, 15);
		const newSelected = new Date(2024, 1, 16);

		const { queryByText } = renderWithThemeContext(<Datepicker selectDate={mockSelectDate} defaultDate={currentDate} />);

		const currentDateItem = queryByText(currentDate.getDate());
		const newSelectedItem = queryByText(newSelected.getDate());

		expect(currentDateItem).toBeInTheDocument();
		expect(newSelectedItem).toBeInTheDocument();
		expect(currentDateItem).toHaveClass('selected');
		expect(newSelectedItem).not.toHaveClass('selected');

		fireEvent.click(newSelectedItem!);

		expect(currentDateItem).not.toHaveClass('selected');
		expect(newSelectedItem).toHaveClass('selected');
		expect(mockSelectDate).toHaveBeenCalledWith(newSelected);
	});
});
