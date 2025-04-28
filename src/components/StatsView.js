import React from "react";
import "../css/StatsView.css";
import ProgressBar from "./ProgressBar";

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

const StatsView = () => {
  return (
    <>
      <div className="stats-wrapper">
        <ProgressBar />
        <p>Current day: {currentDay}</p>
        <p>Days left: {daysLeft}</p>
      </div>
    </>
  );
};

export default StatsView;
