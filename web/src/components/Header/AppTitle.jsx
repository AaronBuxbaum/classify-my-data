import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { HOME } from "../../router/pages";

const { Title } = Typography;

const APP_NAME = "Classify my Data";

const AppTitle = () => (
  <Link to={HOME.path}>
    <Title>{APP_NAME}</Title>
  </Link>
);

export default AppTitle;
