import React, {useState, useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import API from "../utils/API"
import { UserContext } from "../context/UserContext";
import { ThreadContext } from "../context/ThreadContext";


const Downvote = ({ thread, comment, location }) => {
  const {user, isLoggedIn} = useContext(UserContext)
  const {handleReturnHome, handleThreadSelect} = useContext(ThreadContext)
  const [mark, setMark] = useState(false)

  const toggle = mark ? faCheck : faArrowDown

  const handleDownvote = async (e) => {
    e.stopPropagation()
    
    try {
      if (user.username && isLoggedIn){
        if (comment && !thread && location === "featuredThread") {
          const response = await API.downvoteComment(comment.comment_id, {userId: user.user_id})
          console.log("comment vote", response);
          setMark(!mark)
          handleThreadSelect(comment.thread_id)
        }
        if (!comment && thread && location === "featuredThread") {
          const response = await API.downvoteThread(thread.thread_id, {userId: user.user_id})
          console.log("featured thread vote", response);
          setMark(!mark)
          handleThreadSelect(thread.thread_id)
        }
        if (!comment && thread && location === "home") {
          const response = await API.downvoteThread(thread.thread_id, {userId: user.user_id})
          console.log("home thread vote", response);
          setMark(!mark)
          handleReturnHome()
        }
        
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
