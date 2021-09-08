import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserDialog from "./UserDialog"
import "../stylesheets/Header.css";
import { ThreadContext } from "../context/ThreadContext";

const Header = () => {
  let history = useHistory();
  const { handleReturnHome } = useContext(ThreadContext)

  const onHomeClick = () => {
    handleReturnHome()
    history.push("/")
  }

  return (
    <div className="header">
      <div className="header-flex-container">
        <h1 id="plumm-title" onClick={onHomeClick}>
          plummit
        </h1>
        <div className="header-buttons">
            <UserDialog purpose="signup" buttonTheme="no-style-button"/>
            <UserDialog purpose="login" buttonTheme="dialog-button-2"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
