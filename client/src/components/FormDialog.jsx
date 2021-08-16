import React, {useState, useContext} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { UserContext } from '../context/UserContext';
import LogSignForm from './LogSignForm';
import "../stylesheets/FormDialog.css"


const FormDialog = ({purpose}) => {
  const {user, handleLogin, handleSignup, handleLogout, isLoggedIn} = useContext(UserContext)
  const [open, setOpen] = useState(false);

  const onLoginSubmit = (userCredentials) => {
    setOpen(false)
    handleLogin(userCredentials)
  }

  const onSignupSubmit = (userCredentials) => {
    setOpen(false)
    handleSignup(userCredentials)
  }

  const onLogoutClick = () => {
    handleLogout()
  }

  const handleModalClose = () => {
    setOpen(false)
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
  
  const dialogPurpose = purpose === "signup" ? dialogConfig.signup : dialogConfig.login

  return ( 

    !isLoggedIn && !user.username ? (
      <div>
      <button className="dialog-button-2" onClick={() => setOpen(true)}>{dialogPurpose.titleText}</button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" className="dialog-box-bg">{dialogPurpose.titleText}</DialogTitle>
        <DialogContent className="dialog-box-bg">
          <DialogContentText>
            {dialogPurpose.contentText}
          </DialogContentText>
          <LogSignForm dialogPurpose={dialogPurpose} handleModalClose={handleModalClose} />
        </DialogContent>
      </Dialog>
    </div>
    ) :  <div>
      Hello {user.username}
      <button onClick={() => console.log("check user button click in formdialog", user)}>check user</button>
      <button onClick={onLogoutClick}>LOG OUT</button>
    </div>
  );
}

export default FormDialog;
