var today = new Date(); // Gets todays date

// Sets the beginning of the current year
var start = new Date(today.getFullYear(), 0, 0);

// Calculates timezone differece using the timezone set on the users machine.
var diff =
  today -
  start +
  (start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;

// Milliseconds in a day
var oneDay = 86400000;

export const currentDay = Math.floor(diff / oneDay);
export const daysLeft = 365 - currentDay;

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
