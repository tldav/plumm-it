import React, {useState, useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import API from "../utils/API"
import { UserContext } from "../context/UserContext";
import { ThreadContext } from "../context/ThreadContext";

const Upvote = ({ thread, comment, location }) => {
  const {user, isLoggedIn} = useContext(UserContext)
  const {handleReturnHome, handleThreadSelect} = useContext(ThreadContext)
  const [mark, setMark] = useState(false)

  const toggle = mark ? faCheck : faArrowUp

  const handleUpvote = async (e) => {
    e.stopPropagation()
    
    try {
      if (user.username && isLoggedIn){
        if (comment && !thread && location === "featuredThread") {
          const response = await API.upvoteComment(comment.comment_id, {userId: user.user_id})
          console.log("comment vote", response);
          setMark(!mark)
          handleThreadSelect(comment.thread_id)
        }
        if (!comment && thread && location === "featuredThread") {
          const response = await API.upvoteThread(thread.thread_id, {userId: user.user_id})
          console.log("featured thread vote", response);
          setMark(!mark)
          handleThreadSelect(thread.thread_id)
        }
        if (!comment && thread && location === "home") {
          const response = await API.upvoteThread(thread.thread_id, {userId: user.user_id})
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
    <IconButton onClick={handleUpvote} size="small" id="upvote" title="upvote">
      <FontAwesomeIcon icon={toggle}/>
    </IconButton>
  );
};

export default Upvote;

