
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import API from "../utils/API"

const UserDialogForm = ({ dialogPurpose, handleModalClose }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "", 
    password: ""
  })
  const [label, setLabel] = useState({text: "Username", theme: "", available: true})

  const handleInputChange = (e) => {
    const {value, name} = e.target;
    setUserCredentials({...userCredentials, [name]: value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    dialogPurpose.axiosHandler(userCredentials)
    setUserCredentials({username: "", password: ""})
  }

  const validate = async () => {
    try {
      const nameCheck = await API.validateUsername(userCredentials)

      if (nameCheck.data === "unavailable") {
        setLabel({
          ...label, 
          text: "Username - That username is unavailable", 
          theme: "invalid-username", 
          available: false
        })
      } 
      if (nameCheck.data === "available") {
        setLabel({
          ...label, 
          text: "Username - That username is available",
          theme: "valid-username",
          available: true
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  // if (dialogPurpose.titleText === "Sign Up")
  console.log(dialogPurpose.titleText);

  return ( 
    <form action="" onSubmit={onFormSubmit}>
      {dialogPurpose.titleText === "Sign up" ? 
        <TextField
          className={label.theme}
          autoFocus
          margin="dense"
          label={label.text}
          type="text"
          fullWidth
          required
          name="username"
          value={userCredentials.username}
          onChange={handleInputChange}
          onBlur={validate}
        />: 
        <TextField
          // className={label.theme}
          autoFocus
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          required
          name="username"
          value={userCredentials.username}
          onChange={handleInputChange}
          // onBlur={validate}
        />
      }
      
      <TextField
        margin="dense"
        label="Password"
        // type="password"
        type="text"
        fullWidth
        required
        name="password"
        value={userCredentials.password}
        onChange={handleInputChange}
      />
      <DialogActions className="dialog-box-bg">
        <Button onClick={handleModalClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          {dialogPurpose.titleText}
        </Button>
      </DialogActions>
    </form>
  );
}

export default UserDialogForm;