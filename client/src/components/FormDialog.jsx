import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from "../utils/API"
import "../stylesheets/FormDialog.css"

const FormDialog = ({purpose}) => {
  const [open, setOpen] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: "", 
    password: ""
  })
  const [currentUser, setCurrentUser] = useState({userInfo: {}})


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const {value, name} = e.target;
    setUserCredentials({...userCredentials, [name]: value})
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    handleClose();
    const user = await API.userLogin(userCredentials);
    // clg below shows no user data bc of res.send in the login post route. Need to send user info to view in front end
    console.log("logged in user.data from front end", user.data);
    setUserCredentials({username: "", password: ""})
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    handleClose();
    const newUser = await API.createUser(userCredentials);
    console.log(newUser.data);
    setUserCredentials({username: "", password: ""})
  }

  const renderUsername = async () => {
    console.log("clicked!");
    const theUser = await API.getCurrentUser()
    console.log("axios.get(/api/users/current)", theUser.data);
    setCurrentUser({...currentUser, userInfo: theUser.data})
  }

  const dialogConfig = {
    login: {
      titleText: "Log in",
      axiosHandler: handleLogin,
      contentText: "Please enter your username and password to log in."
    }, 
    signup: {
      titleText: "Sign up",
      axiosHandler: handleSignup,
      contentText: "To create an account, please enter a username and password."
    }
  }
  
  const configSelector = (purposeProp) => {
      return purposeProp === "signup" ? dialogConfig.signup : dialogConfig.login
  }

  const dialogPurpose = configSelector(purpose);

  return ( 
    <div>
      {/* {currentUser ? <h1 style={{color: "#fff"}}>{currentUser.userInfo.username}</h1> : null}
      <button onClick={renderUsername}>GIMME USER</button> */}
        <button className="no-style-button" onClick={handleClickOpen}>{dialogPurpose.titleText}</button>

      {/* <Button variant="outlined" color="primary" className="dialog-button" onClick={handleClickOpen}>
        {dialogPurpose.titleText}
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
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
              name="username"
              value={userCredentials.username}
              onChange={handleInputChange}
              onSubmit={dialogPurpose.axiosHandler}
            />
            <TextField
              margin="dense"
              label="Password"
              type="text"
              fullWidth
              name="password"
              value={userCredentials.password}
              onChange={handleInputChange}
              onSubmit={dialogPurpose.axiosHandler}
            />
            <DialogActions className="dialog-box-bg">
              <Button onClick={handleClose} color="primary">
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
