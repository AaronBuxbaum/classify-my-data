import React from "react";
import { Card, Input, Typography } from "antd";

const { Paragraph } = Typography;

const ExplainCard = ({ data, onChange }) => (
  <Card title={data.text} style={{ marginBottom: 25 }}>
    <Paragraph>
      You labeled <strong>{data.vote}</strong>.
    </Paragraph>
    <Input
      size="large"
      onChange={onChange}
      placeholder="Enter your explanation here"
    />
  </Card>
);

export default ExplainCard;
