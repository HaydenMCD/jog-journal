import React from "react";

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

var currentDay = Math.floor(diff / oneDay);

var daysLeft = 365 - currentDay;

export const CurrentDay = () => {
  return <p> Day: {currentDay}</p>;
};

export const DaysLeft = () => {
  return <p>Days left: {daysLeft}</p>;
};
