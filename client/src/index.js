import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
import App from "./App";
// import store from "./store";
import { ContextProvider } from './context';

render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
