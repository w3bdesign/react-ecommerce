import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("Kjører uten å krasje (skal ikke bli rød)", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
