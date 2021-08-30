import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./Modal"
import { ThreadContext } from "../context/ThreadContext";
import { UserContext } from "../context/UserContext";
import "../stylesheets/Header.css";

const Header = () => {
  let history = useHistory();
  const { handleReturnHome } = useContext(ThreadContext)
  const {
    isSignupOpen, 
    setIsSignupOpen, 
    isLoginOpen, 
    setIsLoginOpen, 
    isLoggedIn, 
    user, 
    handleLogout 
  } = useContext(UserContext)

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
          {!isLoggedIn && !user.username ? 
          <>
            <button className="no-style-button" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
            <Modal open={isSignupOpen} setOpen={setIsSignupOpen} purpose="signup" />
            <button className="dialog-button-2" onClick={() => setIsLoginOpen(true)}>Log In</button>
            <Modal open={isLoginOpen} setOpen={setIsLoginOpen} purpose="login" />
          </> : 
          <>
            Hello {user.username}
            <button className="dialog-button" onClick={handleLogout}>LOG OUT</button>
          </> }
        </div>
      </div>
    </div>
  );
};

export default Header;
