import React from "react";
import "../../css/StatsView.css";
import { currentDay, daysLeft } from "./StatisticMath";

const StatsView = () => {
  return (
    <>
      <div className="stats-wrapper">
        <p>Day: {currentDay}</p>
        <div className="progress-placeholder">
          <p>Total kms</p>
          <p>% of target</p>
        </div>
        <div className="stats-grid">
          <p>{daysLeft} days left</p>
          <p>Needed per day</p>
          <p>Daily average</p>
          <p>Personal best</p>
          <p>Current Streak</p>
          <p>Longest Streak</p>
          <p>Estimated total</p>
          <p>Estimated end date</p>
        </div>
      </div>
    </>
  );
};

export default StatsView;
