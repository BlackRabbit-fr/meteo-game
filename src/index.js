import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import { StoreProvider } from "./Store";
import "./index.css";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <HomePage path="/" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
