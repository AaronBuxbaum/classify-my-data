/* eslint-disable react/jsx-filename-extension */

import React from "react";
import ReactDOM from "react-dom";
import StateProvider from "./state/Provider";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Router from "./router";

ReactDOM.render(
  <StateProvider>
    <Router />
  </StateProvider>,
  window.document.getElementById("root")
);

serviceWorker.unregister();
