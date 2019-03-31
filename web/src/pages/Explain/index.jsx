import React, { useState } from "react";
import { Typography } from "antd";
import ExplainCard from "./ExplainCard";
import ProgressBar from "../../components/ProgressBar";
import ProgressSteps from "../../components/ProgressSteps";
import { CATEGORIZE } from "../../router/pages";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { withRouter } from "react-router-dom";

const items = [
  { id: 1, text: "hello", vote: "positive" },
  { id: 2, text: "goodbye", vote: "neutral" }
];

const Explain = ({ mutate, history }) => {
  const [explanations, setExplanations] = useState({});

  const onComplete = () => {
    if (Object.keys(explanations).length) {
      const explanationsRequest = Object.keys(explanations).map(itemId => ({
        ...explanations[itemId],
        itemId,
        username: "aaron"
      }));

      mutate({
        variables: { explanations: explanationsRequest }
      });
    }

    history.push(CATEGORIZE.path);
  };

  return (
    <div>
      <ProgressSteps current={1} />
      <ProgressBar onComplete={onComplete} />

      <Typography.Paragraph>
        The other workers have also finished labeling the same items you just
        labeled. The following items received different labels. Please provide
        an explanation for each of your labels below.
      </Typography.Paragraph>
      <Typography.Paragraph>
        For each item, please describe things about the item that could have
        made it difficult or ambiguous for others.
      </Typography.Paragraph>

      {items.map(data => (
        <ExplainCard
          key={data.id}
          data={data}
          onChange={e =>
            setExplanations({
              ...explanations,
              [data.id]: { explanation: e.target.value }
            })
          }
        />
      ))}
    </div>
  );
};

const createExplanation = gql`
  mutation createExplanations($explanations: [ExplanationInput]) {
    createExplanations(explanations: $explanations)
  }
`;

export default compose(
  withRouter,
  graphql(createExplanation)
)(Explain);
