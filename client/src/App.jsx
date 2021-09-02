import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Thread from "./pages/Thread";
import Category from "./pages/Category"
import ThreadContextProvider from "./context/ThreadContext";
import UserContextProvider from "./context/UserContext";
import ScrollToTop from "./utils/ScrollToTop";
import "./stylesheets/App.css";

const App = ({ location }) => {
  const { pathname } = location;
  const forwardSlashCount = pathname.split("").filter((letter) => letter === "/");

  return (
    <UserContextProvider>
      <ThreadContextProvider>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact strict path={pathname}>
            {forwardSlashCount.length === 3 ? <Category /> : <Thread />}
          </Route>

{/* The single route w/ ternary operator above works for routing to Thread or Category. May be susceptible to future issues.  */}

          {/* <Route exact strict path={pathname}>
            {forwardSlashCount.length === 2 ? null : <Thread />}
          </Route>
          <Route exact strict path={pathname}>
            <Category />
          </Route> */}
        </Switch>
      </ThreadContextProvider>
    </UserContextProvider>
  );
};

export default withRouter(App);
