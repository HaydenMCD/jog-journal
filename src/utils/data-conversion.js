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