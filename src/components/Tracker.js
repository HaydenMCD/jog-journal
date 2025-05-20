import React from "react";
import "../css/Tracker.css";

var today = new Date(); // Gets todays date

// Sets the beginning of the current year
var start = new Date(today.getFullYear(), 0, 0);

// Calculates timezone different using the timezone set on the users machine.
var diff =
  today -
  start +
  (start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;

// Milliseconds in a day
var oneDay = 86400000;

var currentDay = Math.floor(diff / oneDay);

var daysLeft = 365 - currentDay;

const Tracker = () => {
  return (
    <>
      <div className="tracker-wrapper">
        <p>Current day: {currentDay}</p>
        <p>Days left: {daysLeft}</p>
      </div>
    </>
  );
};

export default Tracker;
