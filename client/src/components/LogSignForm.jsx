
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

const LogSignForm = ({ dialogPurpose, handleModalClose }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "", 
    password: ""
  })

  const handleInputChange = (e) => {
    const {value, name} = e.target;
    setUserCredentials({...userCredentials, [name]: value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    dialogPurpose.axiosHandler(userCredentials)
    setUserCredentials({username: "", password: ""})

  }
  return ( 
    <form action="" onSubmit={onFormSubmit}>
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
      />
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

export default LogSignForm;