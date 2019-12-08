import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
