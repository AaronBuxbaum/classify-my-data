import React from "react";
import { get } from "lodash";
import { compose, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import { Typography } from "antd";
import pages from "../../router/pages";

const mapTitle = ({ location }) => ({
  title: get(pages, [location.pathname, "title"])
});

const PageTitle = ({ title }) => (
  <Typography.Title level={2}>{title}</Typography.Title>
);

export default compose(
  withRouter,
  mapProps(mapTitle)
)(PageTitle);
