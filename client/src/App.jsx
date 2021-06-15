import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./stylesheets/App.css";
import Thread from "./pages/Thread";

const App = ({ location }) => {
  const { pathname } = location;
  let forwardSlashCount = pathname.split("").filter((letter) => letter === "/");

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={pathname}>
          {forwardSlashCount.length === 2 ? null : <Thread />}
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(App);
