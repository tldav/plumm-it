import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./stylesheets/App.css";
import Thread from "./pages/Thread";

const App = ({ threadRoute }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={`${threadRoute}`} component={Thread} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    threadRoute: state.featuredThread.threadRoute,
  };
};

export default withRouter(connect(mapStateToProps)(App));
