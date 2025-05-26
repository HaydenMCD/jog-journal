import { CONVERSION_TO_KILOMETERS, CONVERSION_TO_MILES } from "./constants";

/**
 * 
 * @description Converts miles to kilometers.
 * @param {number} miles user input in miles
 * @returns number converted to kilometers
 */
export function convertMilesToKilometers (miles) {
  return miles * CONVERSION_TO_KILOMETERS;
}

/**
 * 
 * @description Converts kilometers to miles.
 * @param {number} kilometers user input in kilometers
 * @returns number converted to miles
 */
export function convertKilometersToMiles (kilometers) {
    return kilometers * CONVERSION_TO_MILES;
}

// Total kilometers
// Loop through each day and sum total kilometers ran

// Percentage
// Divide kilometers ran by the goal set by the user

// Kilometers needed per day to reach target
// Divide remaining kilometers by remaining days

// Daily average
// Divide total kilometers ran by current day

// Personal best distance
// Get the highest value for a single day

// Current run streak
//Display how many days in a row the user has run for

// Best run streak
// Display the most amount of days in a row the user has run

// Estimated total kilometers ran at current pace
// Times daily average by the remaining days

// Estimated finish date at current pace
// Using the daily average, calculate what day the user will complete their goal