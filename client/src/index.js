import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./App.jsx";

const store = createStore(reducer);

render(
  <Provider store={store}>
    {console.log(store.getState())}
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
