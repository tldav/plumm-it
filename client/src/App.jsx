import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./stylesheets/App.css";
import Thread from "./pages/Thread";

const App = ({ location }) => {
  const { pathname } = location;

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={pathname} component={Thread} />
      </Switch>
    </>
  );
};

export default withRouter(App);
