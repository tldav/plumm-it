import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { UserContext } from '../context/UserContext';
import "../stylesheets/FormDialog.css"

const FormDialog = ({purpose}) => {
  const {user, handleLogin, handleSignup, handleLogout} = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: "", 
    password: ""
  })
  // const [currentUser, setCurrentUser] = useState({userInfo: {}})

  const onLoginSubmit = (e) => {
    e.preventDefault()
    setOpen(false)

    const loggedUser = handleLogin(userCredentials)
    console.log("user from login modal", loggedUser);

    setUserCredentials({username: "", password: ""})
  }

  const onSignupSubmit = (e) => {
    e.preventDefault()
    setOpen(false)

    const newUser = handleSignup(userCredentials)
    console.log("user from signup modal", newUser);

    setUserCredentials({username: "", password: ""})

  }

  const onLogoutClick = () => {
    handleLogout()
  }

  // console.log("state User from FormDialog", user);


  const handleInputChange = (e) => {
    const {value, name} = e.target;
    setUserCredentials({...userCredentials, [name]: value})
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
    <div>
      <button onClick={() => console.log("button click in formdialog", user)}>log user</button>
      <button onClick={onLogoutClick}>LOG OUT</button>
      <button className="no-style-button" onClick={() => setOpen(true)}>{dialogPurpose.titleText}</button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" className="dialog-box-bg">{dialogPurpose.titleText}</DialogTitle>
        <DialogContent className="dialog-box-bg">
          <DialogContentText>
            {dialogPurpose.contentText}
          </DialogContentText>
          <form action="" onSubmit={dialogPurpose.axiosHandler}>
            <TextField
              autoFocus
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              required
              name="username"
              value={userCredentials.username}
              onChange={handleInputChange}
              onSubmit={dialogPurpose.axiosHandler}
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              required
              name="password"
              value={userCredentials.password}
              onChange={handleInputChange}
              onSubmit={dialogPurpose.axiosHandler}
            />
            <DialogActions className="dialog-box-bg">
              <Button onClick={() => setOpen(false)} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {dialogPurpose.titleText}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormDialog;
