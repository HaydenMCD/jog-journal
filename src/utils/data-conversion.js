import { KILOMETERS, MILES } from "./constants";

/**
 * 
 * @description Converts miles to kilometers.
 * @param {number} miles user input in miles
 * @returns number converted to kilometers
 */
export function convertMilesToKilometers (miles) {
  return miles * 1.60934;
}

/**
 * 
 * @description Converts kilometers to miles.
 * @param {number} kilometers user input in kilometers
 * @returns number converted to miles
 */
export function convertKilometersToMiles (kilometers) {
    return kilometers / 1.60934;
}