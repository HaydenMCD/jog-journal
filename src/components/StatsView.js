import React from "react";
import "../css/StatsView.css";
import ProgressBar from "./StatComponents/ProgressBar";
import KmsPerDayNeeded from "./StatComponents/KmsPerDayNeeded";
import AveragePerDay from "./StatComponents/AveragePerDay";
import { CurrentDay, DaysLeft } from "./StatComponents/CurrentDay";

const StatsView = () => {
  return (
    <>
      <div className="stats-wrapper">
        <CurrentDay />
        <ProgressBar />
        <DaysLeft />
        <KmsPerDayNeeded />
        <AveragePerDay />
      </div>
    </>
  );
};

export default StatsView;
