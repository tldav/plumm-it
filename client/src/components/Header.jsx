import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./Modal"
// import { ThreadContext } from "../context/ThreadContext";
import { UserContext } from "../context/UserContext";
import "../stylesheets/Header.css";

const Header = () => {
  let history = useHistory();
  // const { handleReturnHome } = useContext(ThreadContext)
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
    // handleReturnHome()
    history.push("/")
  }

  return (
    <div className="header">
      <div className="header-flex-container">
        <h1 id="plumm-title" onClick={onHomeClick} title="Home">
          plummit
        </h1>
          {!isLoggedIn && !user.username ? 
          <>
        <div className="log-sign-header">
            <button className="simple-button" onClick={() => setIsSignupOpen(true)} title="Sign Up">Sign Up</button>
            <Modal open={isSignupOpen} setOpen={setIsSignupOpen} purpose="signup" />
            <button className="pill-button" onClick={() => setIsLoginOpen(true)} title="Log In">Log In</button>
            <Modal open={isLoginOpen} setOpen={setIsLoginOpen} purpose="login" />
        </div>
          </> : 
          <div className="logout-header">
            <span className="user-header">{user.username}</span>
            <button className="pill-button" onClick={handleLogout} title="Log Out" >LOG OUT</button>
          </div> }
      </div>
    </div>
  );
};

export default Header;
