import React from "react";
import "../../css/StatsView.css";
import { currentDay, daysLeft } from "./StatisticMath";

const StatsView = () => {
  return (
    <>
      <div className="stats-wrapper">
        <p>Day: {currentDay}</p>
        <div className="progress-placeholder"></div>
        <p>{daysLeft} days left</p>
      </div>
    </>
  );
};

export default StatsView;
