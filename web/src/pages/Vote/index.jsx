import React, { useState, useEffect, useRef } from "react";
import VoteCard from "../../components/VoteCard";
import { Progress } from "antd";
import { withRouter } from "react-router-dom";
import { LOBBY } from "../../router/pages";

const items = [{ id: 1, text: "hello" }, { id: 2, text: "goodbye" }];

const ROUND_TIME_LIMIT = 3 * 1000;
const formatFn = percent =>
  `${Math.round(
    (ROUND_TIME_LIMIT * (percent / 100)) / 1000
  )} seconds remaining`;

const startTime = Date.now();
const endTime = startTime + ROUND_TIME_LIMIT;

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const isRunning = percent => percent > 0;
let hasFinished = false;

const sendVotesToServer = votes => {
  console.log(votes);
};

const Vote = ({ history }) => {
  const [timeRemainingPercent, setTimeRemainingPercent] = useState(100);
  const [votes, setVote] = useState({});

  useInterval(
    () => {
      setTimeRemainingPercent(
        ((endTime - Date.now()) / ROUND_TIME_LIMIT) * 100
      );
    },
    isRunning(timeRemainingPercent) ? 1000 : null
  );

  if (!isRunning(timeRemainingPercent) && !hasFinished) {
    hasFinished = true;
    sendVotesToServer(votes);
    history.push(LOBBY.path);
  }

  return (
    <div>
      <div style={{ width: 200 }}>
        <Progress
          default="small"
          percent={timeRemainingPercent}
          size="small"
          format={formatFn}
        />
      </div>

      {items.map(data => (
        <VoteCard
          key={data.id}
          data={data}
          onSelect={vote => setVote({ ...votes, [data.id]: vote })}
        />
      ))}
    </div>
  );
};

export default withRouter(Vote);
