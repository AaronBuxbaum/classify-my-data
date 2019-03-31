import React from "react";
import { Card, Select } from "antd";

const Option = Select.Option;

const VoteCard = ({ data, onSelect }) => {
  return (
    <Card title={data.text} style={{ width: 300, marginBottom: 15 }}>
      <Select onChange={onSelect} style={{ width: 150 }}>
        <Option value="negative">Negative</Option>
        <Option value="neutral">Neutral</Option>
        <Option value="positive">Positive</Option>
      </Select>
    </Card>
  );
};

export default VoteCard;
