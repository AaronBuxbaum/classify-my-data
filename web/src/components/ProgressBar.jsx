import React, { useState } from "react";
import useInterval from "../hooks/useInterval";
import { Progress } from "antd";
import { noop } from "lodash";

const ROUND_TIME_LIMIT = 5 * 1000;
const formatFn = percent =>
  `${Math.round(
    (ROUND_TIME_LIMIT * (percent / 100)) / 1000
  )} seconds remaining`;

const isRunning = percent => percent > 0;

const ProgressBar = ({ onComplete = noop }) => {
  const [timeRemainingPercent, setTimeRemainingPercent] = useState(100);
  const [endTime] = useState(Date.now() + ROUND_TIME_LIMIT);

  useInterval(
    () => {
      const timeRemaining = (endTime - Date.now()) / ROUND_TIME_LIMIT;
      setTimeRemainingPercent(timeRemaining * 100);
    },
    isRunning(timeRemainingPercent) ? 30 : null
  );

  if (!isRunning(timeRemainingPercent)) {
    onComplete();
  }

  return (
    <div style={{ marginLeft: 100, marginRight: 200, marginBottom: 50 }}>
      <Progress
        default="small"
        percent={timeRemainingPercent}
        size="small"
        status="active"
        format={formatFn}
      />
    </div>
  );
};

export default ProgressBar;
