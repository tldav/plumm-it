import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./stylesheets/App.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
      </Switch>
    </>
  );
};

export default App;
