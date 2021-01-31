import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./App";
import "normalise"
import { GlobalStyles } from "./global-styles";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
