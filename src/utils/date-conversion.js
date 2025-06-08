import { MILISECONDS_IN_DAY, TODAYS_DATE, START_OF_YEAR } from './constants';

// Calculates timezone differece using the timezone set on the users machine.
const diff =
  TODAYS_DATE -
  START_OF_YEAR +
  (START_OF_YEAR.getTimezoneOffset() - TODAYS_DATE.getTimezoneOffset()) *
    60 *
    1000;

export const currentDay = Math.floor(diff / MILISECONDS_IN_DAY);
export const daysLeft = 365 - currentDay;
