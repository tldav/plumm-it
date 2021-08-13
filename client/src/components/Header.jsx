import React from "react";
import { useHistory } from "react-router-dom";
import FormDialog from "./FormDialog"
import "../stylesheets/Header.css";

const Header = () => {
  let history = useHistory();
  return (
    <div className="header">
      <div className="header-flex-container">
        <h1 id="plumm-title" onClick={() => history.push("/")}>
          plummit
        </h1>
        <div className="header-buttons">
          <FormDialog purpose="signup"/>
          <FormDialog purpose="login"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
