import { DayOfWeek } from './types';

/**
 * The height of a single division representing an hour, in pixels.
 */
export const HOUR_HEIGHT = 65;

/**
 * The number of hours in a day.
 */
export const HOURS_NUMBER = 24;

/**
 * The number of minutes in an hour.
 */
export const MINS_IN_HOUR = 60;

/**
 * Names of the months
 */
export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

/**
 * Names of the days of the week in full and short form
 */
export const DAYS_OF_WEEK: DayOfWeek[] = [
	{
		fullForm: 'Sunday',
		shortForm: 'Sun',
	},
	{
		fullForm: 'Monday',
		shortForm: 'Mon',
	},
	{
		fullForm: 'Tuesday',
		shortForm: 'Tue',
	},
	{
		fullForm: 'Wednesday',
		shortForm: 'Wed',
	},
	{
		fullForm: 'Thursday',
		shortForm: 'Thu',
	},
	{
		fullForm: 'Friday',
		shortForm: 'Fri',
	},
	{
		fullForm: 'Saturday',
		shortForm: 'Sat',
	},
];
