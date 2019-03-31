import React from "react";
import { Steps } from "antd";

const ProgressSteps = ({ current }) => (
  <Steps
    current={current}
    style={{ paddingLeft: 100, paddingRight: 100, paddingBottom: 20 }}
  >
    <Steps.Step title="Vote" />
    <Steps.Step title="Explain" />
    <Steps.Step title="Categorize" />
  </Steps>
);

export default ProgressSteps;
