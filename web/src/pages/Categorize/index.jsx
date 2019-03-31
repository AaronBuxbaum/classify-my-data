import React, { useState } from "react";
import { Typography } from "antd";
import CategorizeCard from "./CategorizeCard";
import ProgressBar from "../../components/ProgressBar";
import ProgressSteps from "../../components/ProgressSteps";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { withRouter } from "react-router";
import { HOME } from "../../router/pages";

const items = [
  { id: 1, text: "hello", vote: "positive" },
  { id: 2, text: "goodbye", vote: "neutral" }
];

const Categorize = ({ mutate, history }) => {
  const [categories, setCategories] = useState({});

  const onComplete = () => {
    if (Object.keys(categories).length) {
      const categorizationsRequest = Object.keys(categories).map(itemId => ({
        ...categories[itemId],
        itemId,
        username: "aaron"
      }));

      mutate({
        variables: { categorizations: categorizationsRequest }
      });
    }

    history.push(HOME.path);
  };

  return (
    <div>
      <ProgressSteps current={2} />
      <ProgressBar onComplete={onComplete} />

      <Typography.Paragraph>
        You labeled differently on the following items. Please review all the
        explanations provided by other workers and pick or come up with good
        category names so the requesters can make an informed decision
        afterwards.
      </Typography.Paragraph>

      {items.map(data => (
        <CategorizeCard
          key={data.id}
          data={data}
          onChange={category =>
            setCategories({ ...categories, [data.id]: { category } })
          }
        />
      ))}
    </div>
  );
};

const createCategorization = gql`
  mutation createCategorizations($categorizations: [CategorizationInput]) {
    createCategorizations(categorizations: $categorizations)
  }
`;

export default compose(
  withRouter,
  graphql(createCategorization)
)(Categorize);
