import React, { useState } from "react";
import { AutoComplete, Card, List, Typography } from "antd";
import { get, take, sortBy } from "lodash";

const items = [
  { text: "abcd", popularity: 58 },
  { text: "efgh", popularity: 9 },
  { text: "ghi", popularity: 19 }
];

const filterItems = items => sortBy(take(items, 5), "popularity").reverse();

const CategorizeCard = ({ data, onChange }) => {
  const [search, setSearch] = useState("");
  const autocompleteItems = items.map(({ text }) => text);

  if (search && get(autocompleteItems, 0) !== search) {
    autocompleteItems.unshift(search);
  }

  return (
    <Card title={data.text} style={{ marginBottom: 15 }}>
      <AutoComplete
        style={{ width: 400 }}
        dataSource={autocompleteItems}
        onSearch={setSearch}
        onSelect={onChange}
        value={search}
        placeholder="Select or enter a category"
      />

      <Typography.Paragraph style={{ paddingTop: 20 }}>
        ...or select the best option below.
      </Typography.Paragraph>

      <List
        style={{ marginTop: 20 }}
        dataSource={filterItems(items)}
        renderItem={item => (
          <List.Item
            key={item.text}
            onClick={() => {
              setSearch(item.text);
              onChange(item.text);
            }}
            style={{
              cursor: "pointer",
              width: `${item.popularity}%`,
              paddingLeft: 20,
              backgroundColor: "#40a9ff2b"
            }}
          >
            {item.text}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default CategorizeCard;
