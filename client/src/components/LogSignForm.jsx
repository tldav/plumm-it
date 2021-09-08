
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import API from "../utils/API"

const LogSignForm = ({ dialogPurpose, handleModalClose }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "", 
    password: ""
  })
  const [label, setLabel] = useState({text: "Username", theme: "", disable: true})

  const handleInputChange = (e) => {
    const {value, name} = e.target;
    const shouldSetState = value.length < 20
    if (shouldSetState) setUserCredentials({...userCredentials, [name]: value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    dialogPurpose.axiosHandler(userCredentials)
    setUserCredentials({username: "", password: ""})
  }

  const validateSubmit = async () => {
    if (userCredentials.username.length > 0 && userCredentials.username.length < 6) {
      setLabel({
        ...label, 
        text: "Username must be at least 6 characters long.", 
        theme: "invalid-username", 
        disable: true
      })
      return
    }

    try {
      const nameCheck = await API.validateUsername(userCredentials)
      if (nameCheck.data === "unavailable" && userCredentials.username.length >= 6) {
        setLabel({
          ...label, 
          text: "Username - That username is unavailable", 
          theme: "invalid-username", 
          disable: true
        })
      } 
      if (nameCheck.data === "available" && userCredentials.username.length >= 6) {
        setLabel({
          ...label, 
          text: "Username - That username is available",
          theme: "valid-username",
          disable: false
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const validateLogin = async () => {
    try {
      const nameCheck = await API.validateUsername(userCredentials)
      if (nameCheck.data === "unavailable") {
        setLabel({
          ...label, 
          text: "Username", 
          theme: "", 
          disable: false
        })
      } 
      if (nameCheck.data === "available" && userCredentials.username.length) {
        setLabel({
          ...label, 
          text: "Username - Invalid username",
          theme: "invalid-username",
          disable: true
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  // need pw validation
  // const validatePassword = () => {

  // }

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
          onBlur={validateSubmit}
        />: 
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
          onBlur={validateLogin}
        />
      }
      
      <TextField
        margin="dense"
        label="Password"
        type="password"
        fullWidth
        required
        name="password"
        value={userCredentials.password}
        onChange={handleInputChange}
      />
      <DialogActions>
        <Button onClick={handleModalClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary" disabled={label.disable}>
          {dialogPurpose.titleText}
        </Button>
      </DialogActions>
    </form>
  );
}

export default LogSignForm;