import 'react-app-polyfill/ie11';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";

// Import the store in order to use Redux
import { store, persistor } from "./redux/store";

// Wrap Redux Provider around our App
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
