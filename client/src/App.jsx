import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Thread from "./pages/Thread";
import "./stylesheets/App.css";
import ThreadContextProvider from "./context/ThreadContext";
import UserContextProvider from "./context/UserContext";

const App = ({ location }) => {
  const { pathname } = location;
  let forwardSlashCount = pathname.split("").filter((letter) => letter === "/");

  return (
    <UserContextProvider>
      <ThreadContextProvider>
        <Header />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={pathname}>
            {forwardSlashCount.length === 2 ? null : <Thread />}
          </Route>
        </Switch>
      </ThreadContextProvider>
    </UserContextProvider>
  );
};

export default withRouter(App);
