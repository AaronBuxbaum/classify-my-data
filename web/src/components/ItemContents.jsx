import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const ItemContents = ({ data }) => <Paragraph>{data.text}</Paragraph>;

export default ItemContents;
