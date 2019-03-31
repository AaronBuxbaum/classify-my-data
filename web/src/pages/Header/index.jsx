import React from "react";
import "./header.scss";
import AppTitle from "./AppTitle";
import PageTitle from "./PageTitle";

const Header = () => (
  <>
    <div style={{ justifyContent: "space-between" }}>
      <AppTitle />
    </div>
    <PageTitle />
  </>
);

export default Header;
