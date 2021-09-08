import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Thread from "./pages/Thread";
import Category from "./pages/Category"
import NewThread from "./pages/NewThread"
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
            {forwardSlashCount.length === 2 ? <NewThread /> : 
            forwardSlashCount.length === 3 ? <Category /> : 
            <Thread />}
          </Route>
        </Switch>
      </ThreadContextProvider>
    </UserContextProvider>
  );
};

export default withRouter(App);
