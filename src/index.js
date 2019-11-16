import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

// Wrap Redux Provider around our App
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
