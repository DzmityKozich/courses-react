import { useCallback, useMemo, useRef, useState } from 'react';
import { InputField } from '../InputField';
import { useDatepickerDropdown } from './useDatepickerDropdown';
import { Popover } from '../Popover';
import { Datepicker } from '../Datepicker/Datepicker';
import { CalendarDate } from 'entities/CalendarDate';
import { Label } from '../Label';

// TODO: do not use CalendarDate!
type Props = {
	onDateSelect: (date: CalendarDate) => void;
	date: CalendarDate;
	label?: string;
};

export const DatepickerDropdown: React.FC<Props> = ({ onDateSelect, date, label }) => {
	const { registerTrigger, state, toggleState, triggerElement } = useDatepickerDropdown();
	const inputRef = useRef<HTMLInputElement>(null);
	const [selectedDate, setSelectedDate] = useState(date.toDate());

	const displayValue = useMemo(() => {
		const calendarDate = new CalendarDate(selectedDate);
		return `${calendarDate.day.fullForm}, ${calendarDate.month} ${calendarDate.date}`;
	}, [selectedDate]);

	const togglePopover = () => {
		const parent = inputRef.current?.parentElement || null;
		registerTrigger(parent);
		toggleState();
	};

	const handleDateSelect = useCallback((date: Date) => {
		setSelectedDate(date);
		onDateSelect(new CalendarDate(date));
		toggleState();
	}, []);

	return (
		<div className="inline-flex flex-col w-full">
			{label && <Label>{label}</Label>}
			<InputField placeholder="Pick date" onClick={() => togglePopover()} ref={inputRef} value={displayValue} readOnly />
			<Popover open={state.open} toggleState={toggleState} triggerElement={triggerElement!}>
				<div className="bg-white flex justify-center">
					<Datepicker selectDate={handleDateSelect} defaultDate={selectedDate} />
				</div>
			</Popover>
		</div>
	);
};
