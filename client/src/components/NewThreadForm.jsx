import React, {useContext, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import API from "../utils/API"
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router';

const NewThreadForm = () => {
  const { user } = useContext(UserContext)
  const [thread, setThread] = useState({
    title: "",
    body: "",
    category: 0
  })

  let history = useHistory()

    const onFormSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await API.createThread({title: thread.title, body: thread.body, userId: user.user_id, categoryId: thread.category})
        const newThread = response.data[0][0]
        const path = `/p/${newThread.category_name}/${thread.category}/${thread.title.replace(/ /g, "_")}/${newThread.thread_id}`;
        history.push(path);
      } catch(error) {
        console.log(error);
      }
  }

  const handleInputChange = (e) => {
    const {value, name} = e.target;
    setThread({...thread, [name]: value})
  }

  return (
    <div className="stage" style={{background: "#fff"}}>
      <form action="" onSubmit={onFormSubmit}>
        <FormControl 
          variant="outlined" 
          margin="dense"
          style={{marginBottom: "20px"}}>
          <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
          <Select 
            name="category"
            required
            value={thread.category}
            onChange={handleInputChange}
            native
            label="Category"
            // inputProps={{
            //   name: 'category',
            //   id: 'outlined-age-native-simple',
            // }}
          >
            <option aria-label="None" value="" />
            <option value={1}>news</option>
            <option value={2}>sports</option>
            <option value={3}>technology</option>
            <option value={4}>gaming</option>
            <option value={5}>movies</option>
            <option value={6}>books</option>
            <option value={7}>food</option>
            <option value={8}>conspiracies</option>
          </Select>
        </FormControl>

        <TextField 
          style={{marginBottom: "20px", background: "#fff"}}
          autoFocus
          required
          label="Title"
          variant="outlined"
          margin="dense"
          fullWidth
          name="title"
          value={thread.title}
          onChange={handleInputChange}
        />
        <TextField
          style={{ background: "#fff"}}
          required
          variant="outlined"
          label="Body"
          margin="dense"
          multiline
          fullWidth
          rows={20}
          name="body"
          value={thread.body}
          onChange={handleInputChange}
        />
        <DialogActions>
          {/* <Button type="submit" color="primary">
            Cancel
          </Button> */}
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </div>
  )
}

export default NewThreadForm
