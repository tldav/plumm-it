import React from "react";
import { useHistory } from "react-router-dom";
import "../stylesheets/Header.css";

const Header = () => {
  let history = useHistory();
  return (
    <div className="header">
      <div className="header-flex-container">
        <h1 id="plumm-title" onClick={() => history.push("/")}>
          plumm.it
        </h1>
        <div className="header-buttons">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
