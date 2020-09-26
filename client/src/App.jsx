import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./stylesheets/App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
      </Switch>
    </>
  );
};

export default App;
