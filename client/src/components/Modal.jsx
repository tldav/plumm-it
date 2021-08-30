import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LogSignForm from './LogSignForm';
import { UserContext } from '../context/UserContext';
import "../stylesheets/Modal.css"

const Modal = ({ purpose, open, setOpen }) => {
  const {handleLogin, handleSignup, setIsSignupOpen, setIsLoginOpen} = useContext(UserContext)


  const onLoginSubmit = (userCredentials) => {
    setOpen(false)
    handleLogin(userCredentials)
  }

  const onSignupSubmit = (userCredentials) => {
    setOpen(false)
    handleSignup(userCredentials)
  }

  const dialogConfig = {
    login: {
      titleText: "Log in",
      axiosHandler: onLoginSubmit,
      contentText: "Please enter your username and password to log in."
    }, 
    signup: {
      titleText: "Sign up",
      axiosHandler: onSignupSubmit,
      contentText: "To create an account, please enter a username and password."
    }
  }
  
  let dialogPurpose = purpose === "signup" ? dialogConfig.signup : dialogConfig.login;

  const modalSwitch = () => {
    if (purpose === "signup") {
      setIsSignupOpen(false)
      setIsLoginOpen(true)
    }
    if (purpose === "login") {
      setIsLoginOpen(false)
      setIsSignupOpen(true)
    }
  }

  return ( 
      <div>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title" className="dialog-box-bg">{dialogPurpose.titleText}</DialogTitle>
          <DialogContent className="dialog-box-bg">
            <DialogContentText>
              {dialogPurpose.contentText}
            </DialogContentText>
            <LogSignForm dialogPurpose={dialogPurpose} handleModalClose={() => setOpen(false)} open={open} />
            {purpose === "signup" ? 
            <div>
              Already a member? Login <button onClick={modalSwitch}>login</button> 
            </div> : 
            <div>
              Need an account? Sign up <button onClick={modalSwitch}>signup</button>
            </div>}
          </DialogContent>
        </Dialog>
      </div>
  );
}

export default Modal;
