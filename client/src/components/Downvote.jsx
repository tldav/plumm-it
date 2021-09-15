import React, {useState, useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../context/UserContext";
import { ThreadContext } from "../context/ThreadContext";
import API from "../utils/API"


const Downvote = ({ thread }) => {
  const {user, isLoggedIn} = useContext(UserContext)
  const {handleReturnHome} = useContext(ThreadContext)
  const [mark, setMark] = useState(false)

  const toggle = mark ? faCheck : faArrowDown

  const handleDownvote = async (e) => {
    e.stopPropagation()
    
    try {
      if (user.username && isLoggedIn){
        const response = await API.downvoteThread(thread.thread_id, {userId: user.user_id})
        console.log(response);
        setMark(!mark)
        handleReturnHome()
      }   
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <IconButton onClick={handleDownvote} size="small" id="downvote" title="downvote">
      <FontAwesomeIcon icon={toggle} />
    </IconButton>
  );
};

export default Downvote;
