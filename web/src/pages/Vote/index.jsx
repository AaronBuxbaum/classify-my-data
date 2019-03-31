import React, { useState } from "react";
import VoteCard from "./VoteCard";
import { withRouter } from "react-router-dom";
import { EXPLAIN } from "../../router/pages";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import ProgressBar from "../../components/ProgressBar";
import ProgressSteps from "../../components/ProgressSteps";

const items = [{ id: 1, text: "hello" }, { id: 2, text: "goodbye" }];

const Vote = ({ mutate, history }) => {
  const [votes, setVote] = useState({});

  const onComplete = () => {
    if (Object.keys(votes).length) {
      const voteRequest = Object.keys(votes).map(itemId => ({
        ...votes[itemId],
        itemId,
        username: "aaron"
      }));

      mutate({
        variables: { votes: voteRequest }
      });
    }

    history.push(EXPLAIN.path);
  };

  return (
    <div>
      <ProgressSteps current={0} />
      <ProgressBar onComplete={onComplete} />

      {items.map(data => (
        <VoteCard
          key={data.id}
          data={data}
          onSelect={vote => setVote({ ...votes, [data.id]: { vote } })}
        />
      ))}
    </div>
  );
};

const createVote = gql`
  mutation createVote($votes: [VoteInput]) {
    createVotes(votes: $votes)
  }
`;

export default compose(
  withRouter,
  graphql(createVote)
)(Vote);
