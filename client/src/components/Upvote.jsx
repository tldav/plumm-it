import React, {useState, useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../context/UserContext";
import API from "../utils/API"
import "../stylesheets/Upvote.css";

const Upvote = ({ thread}) => {
  const {user, isLoggedIn} = useContext(UserContext)
  const [mark, setMark] = useState(true)

  const toggle = mark ? faCheck : faArrowUp

  const clicker = (e) => {
    setMark(!mark)
  }

  const handleUpvote = async (e) => {
    e.stopPropagation()
    
    try {
      if (user.username && isLoggedIn){
        const response = await API.upvoteThread(thread.thread_id, {userId: user.user_id})
        console.log(response);
      }   
    } catch(error) {
      console.log(error);
    }

    // threadId: thread.thread_id
    // userId: user.user_id
  }

  return (
    <IconButton onClick={handleUpvote} id="upvote" title="upvote">
      <FontAwesomeIcon icon={toggle}/>
    </IconButton>
  );
};

export default Upvote;