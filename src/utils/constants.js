/* -------------------------------------------------------------------------- */
/*                     Constants for distance conversions                     */
/* -------------------------------------------------------------------------- */

// Conversion factor from kilometers to miles
export const CONVERSION_TO_MILES = 0.621371;
// Conversion factor from miles to kilometers
export const CONVERSION_TO_KILOMETERS = 1.60934;

export const DISTANCE_TYPES = {
  MILES: {
    NAME: 'Miles',
    ROC: CONVERSION_TO_MILES,
  },
  KILOMETERS: {
    NAME: 'Kilometers',
    ROC: CONVERSION_TO_KILOMETERS,
  },
};

export const NUMBER_INPUT_FIXED_DECIMAL = 2;

/* -------------------------------------------------------------------------- */
/*                       Constants for time conversions                       */
/* -------------------------------------------------------------------------- */

export const TODAYS_DATE = new Date(); // Gets today's date
// Sets the beginning of the current year
export const START_OF_YEAR = new Date(TODAYS_DATE.getFullYear(), 0, 0);
// Sets the end of the current year
export const THIS_YEAR = new Date().getFullYear();
// Number of milliseconds in a day
export const MILISECONDS_IN_DAY = 86400000;
// Number of milliseconds in an hour
export const MILISECONDS_IN_HOUR = 3600000;

/* -------------------------------------------------------------------------- */
/*                        Constants for reducer actions                       */
/* -------------------------------------------------------------------------- */
