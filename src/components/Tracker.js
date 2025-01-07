import React from "react";

var today = new Date();
var start = new Date(today.getFullYear(), 0, 0);
var diff =
  today -
  start +
  (start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;
var oneDay = 1000 * 60 * 60 * 24;
var totalDays = Math.floor(diff / oneDay);
var daysLeft = 365 - totalDays;
console.log("Day of year: " + totalDays);

const Tracker = () => {
  return (
    <>
      <p>Day of year is: {totalDays}</p>
      <p>Days left in the year: {daysLeft}</p>
    </>
  );
};

export default Tracker;
