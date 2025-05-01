/* -------------------------------------------------------------------------- */
/*                     Constants for distance conversions                     */
/* -------------------------------------------------------------------------- */

// Conversion factor from kilometers to miles
export const CONVERSION_TO_MILES = 0.621371;
// Conversion factor from miles to kilometers
export const CONVERSION_TO_KILOMETERS = 1.60934;

/* -------------------------------------------------------------------------- */
/*                       Constants for time conversions                       */
/* -------------------------------------------------------------------------- */

// Number of milliseconds in a day
export const MILISECONDS_IN_DAY = 86400000;
// Number of milliseconds in an hour
export const MILISECONDS_IN_HOUR = 3600000;

/* -------------------------------------------------------------------------- */
/*                        Constants for reducer actions                       */
/* -------------------------------------------------------------------------- */

// Action typeS for adding distance as miles OR kilometers
export const DISTANCE_REDUCER = {
  MILES: { SET_MILES: 'SET_MILES', ROC: CONVERSION_TO_MILES },
  KILOMETERS: {
    SET_KILOMETERS: 'SET_KILOMETERS',
    ROC: CONVERSION_TO_KILOMETERS,
  },
};
