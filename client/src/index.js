import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store";

render(
  <Provider store={store}>
    {console.log("Initial State: ", store.getState())}
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
