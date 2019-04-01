import React, { useState } from "react";
import VoteCard from "./VoteCard";
import { withRouter } from "react-router-dom";
import { EXPLAIN } from "../../router/pages";
import { compose, graphql, Query } from "react-apollo";
import gql from "graphql-tag";
import ProgressBar from "../../components/ProgressBar";
import ProgressSteps from "../../components/ProgressSteps";

const GET_ITEMS = gql`
  {
    classificationItems {
      id
      text
    }
  }
`;

const CREATE_VOTE = gql`
  mutation createVote($votes: [VoteInput]) {
    createVotes(votes: $votes)
  }
`;

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
    <Query query={GET_ITEMS}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return null;
        }

        return (
          <div>
            <ProgressSteps current={0} />
            <ProgressBar onComplete={onComplete} />

            {data.classificationItems.map(item => (
              <VoteCard
                key={item.id}
                data={item}
                onSelect={vote => setVote({ ...votes, [item.id]: { vote } })}
              />
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default compose(
  withRouter,
  graphql(CREATE_VOTE)
)(Vote);
