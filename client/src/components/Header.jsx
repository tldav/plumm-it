import React from "react";
import { useHistory } from "react-router-dom";
import UserDialog from "./UserDialog"
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
            <UserDialog purpose="signup" buttonTheme="dialog-button-2"/>
            <UserDialog purpose="login" buttonTheme="dialog-button-2"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
