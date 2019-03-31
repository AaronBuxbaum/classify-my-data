import React from "react";
import { get } from "lodash";
import { compose, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import { Typography } from "antd";
import pages from "../../router/pages";

const { Title } = Typography;

const mapTitle = ({ location }) => ({
  title: get(pages, [location.pathname, "title"])
});

const PageTitle = ({ title }) => <Title level={2}>{title}</Title>;

export default compose(
  withRouter,
  mapProps(mapTitle)
)(PageTitle);
