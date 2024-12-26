import { CalendarEvent } from 'entities/CalendarEvent';
import { EventSettings } from 'widgets/EventCard/model/EventSettings';
import { getDurationInMins, getMinsFromDayStart, HOURS_NUMBER, HOUR_HEIGHT, MINS_IN_HOUR } from 'shared/lib';

type Overlap = 'nested' | 'overlay' | 'parallel';

class EventStack {
	public eventWidth: number = 0;
	public events: CalendarEvent[] = [];

	constructor(initialEvents: CalendarEvent[]) {
		initialEvents.forEach((e) => this.add(e));
	}

	public get width(): string {
		return `${this.eventWidth}%`;
	}

	public add(event: CalendarEvent): void {
		this.events.push(event);
		this.eventWidth = this.calculateWidth();
	}

	public remove(event: CalendarEvent): void {
		const index = this.events.findIndex(({ id }) => event.id === id);
		if (index > -1) {
			this.events.splice(index, 1);
		}
	}

	public has(event: CalendarEvent): boolean {
		return this.events.findIndex(({ id }) => event.id === id) > -1;
	}

	public isOverlap(event: CalendarEvent): Overlap {
		for (const e of this.events) {
			let eventA: CalendarEvent, eventB: CalendarEvent;
			if (e.startTime < event.startTime) {
				eventA = e;
				eventB = event;
			} else if (e.startTime > event.startTime) {
				eventA = event;
				eventB = e;
			} else {
				return 'nested';
			}
			if (this.isNested(eventA, eventB)) {
				return 'nested';
			}
			if (eventB.startTime < eventA.endTime) {
				return 'overlay';
			}
		}
		return 'parallel';
	}

	private isNested(eventA: CalendarEvent, eventB: CalendarEvent) {
		return eventA.startTime < eventB.startTime && eventA.endTime >= eventB.endTime;
	}

	private calculateWidth(): number {
		return 100 / this.events.length;
	}

	public getEventLeft(event: CalendarEvent): string {
		let leftIndex = this.events.findIndex(({ id }) => event.id === id);
		if (leftIndex === -1) {
			leftIndex = 0;
			console.error(new Error(`Event ${event.id} is not in event stack!`));
		}
		return leftIndex ? `${leftIndex * this.eventWidth}%` : '0px';
	}
}

const getEventTop = (event: CalendarEvent): string => {
	const minsFormDayStart = getMinsFromDayStart(event.startTime.toDate());
	const top = (HOURS_NUMBER * HOUR_HEIGHT * minsFormDayStart) / (HOURS_NUMBER * MINS_IN_HOUR);
	return `${top}px`;
};

const getEventHeight = (event: CalendarEvent): string => {
	const eventDurationInMins = getDurationInMins(event.startTime.toDate(), event.endTime.toDate());
	const height = (HOURS_NUMBER * HOUR_HEIGHT * eventDurationInMins) / (HOURS_NUMBER * MINS_IN_HOUR);
	return `${height}px`;
};

export const calculatePositions = (events: CalendarEvent[]): { event: CalendarEvent; settings: EventSettings }[] => {
	const stacks = splitOnStacks(events);
	const settedEvents: { event: CalendarEvent; settings: EventSettings }[] = [];
	for (const event of events) {
		const eventStacks = stacks.filter((stack) => stack.has(event));
		if (eventStacks.length === 0) throw new Error(`Event ${event.id} has no stack`);
		const min = getStackWithMinWidth(eventStacks);
		const { left, width } = { left: min.getEventLeft(event), width: min.width };
		const { height, top } = { height: getEventHeight(event), top: getEventTop(event) };
		settedEvents.push({ event, settings: { position: { left, top }, size: { height, width } } });
	}
	return settedEvents;
};

const splitOnStacks = (events: CalendarEvent[]): EventStack[] => {
	const stacks: EventStack[] = [];
	for (const event of events) {
		let placed = false;
		for (let i = 0; i < stacks.length; i++) {
			if (stacks[i].isOverlap(event) !== 'parallel') {
				stacks[i].add(event);
				placed = true;
				break;
			}
		}
		if (!placed) {
			stacks.push(new EventStack([event]));
		}
	}
	return stacks;
};

const getStackWithMinWidth = (stacks: EventStack[]): EventStack => {
	let min = stacks[0];
	for (let i = 0; i < stacks.length; i++) {
		if (stacks[i].eventWidth < min.eventWidth) {
			min = stacks[i];
		}
	}
	return min;
};
