import React, { useContext, useState, useEffect, useRef } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CloseIcon from '@material-ui/icons/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown  } from '@fortawesome/free-solid-svg-icons'
import dateFormat from "dateformat"
import Input from "./Input"
import voteCount from "../utils/voteCount";
import { UserContext } from "../context/UserContext";
import "../stylesheets/Comment.css";


const CommentItem = ({ comment, originalPoster, thread }) => {
  const {setIsSignupOpen, user, isLoggedIn} = useContext(UserContext)
  const [isInputVisible, setIsInputVisible] = useState(false)
  const refWrapper = useRef(null)

  const votes = voteCount(comment.upvotes, comment.downvotes)


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refWrapper.current && !refWrapper.current.contains(e.target) && isInputVisible) {
        setIsInputVisible(false)
      }
    }
    document.addEventListener("click", handleClickOutside, false );
    return () => document.removeEventListener("click", handleClickOutside, false)
  }, [isInputVisible])

  const onReplyClick = () => {
    !user.username && !isLoggedIn ? setIsSignupOpen(true) : setIsInputVisible(true)
  }

  const handleInputClose = () => {
    setIsInputVisible(false)
  }

  const renderConfig = {
    isOP: originalPoster === comment.username ? "op-flag" : "hidden",
    isReply: comment.parent_comment_id ? "reply-flag" : "hidden",
  }


  return (
    <>
      <div className="convo-container" >
        <div className="column-1">
          <IconButton id="upvote" size="small">
          <FontAwesomeIcon icon={faArrowUp} className="arrow-button" />
            {/* <ArrowUpwardIcon className="arrow-button" /> */}
          </IconButton>
          <p>{votes}</p>
          <IconButton id="downvote" size="small">
          <FontAwesomeIcon icon={faArrowDown} />
            {/* <ArrowDownwardIcon className="arrow-button" /> */}
          </IconButton>
          <div className="vertical-line"></div>
        </div>
        <div className="column-2">
          <p className="comment-heading">
          {/* {<span className={renderConfig.isOP}>OP </span>}<span className="comment-name">{comment.username}</span> {` • ${dateFormat(comment.created_at,
            "mmmm dS, yyyy, h:MM TT"
          )} • ⤮ ${votes(comment.upvotes, comment.downvotes)}`} */}
          {<span className={renderConfig.isOP}>OP </span>}<span className="comment-name">{comment.username}</span> {` • ${dateFormat(comment.created_at,
            "mmmm dS, yyyy, h:MM TT"
          )}`}
          </p>
          <div className="comment-box" >
            <div className={renderConfig.isReply}>{comment.parent_username} posted: 
              <div className="reply-body">
                <p>{comment.parent_comment_body}</p>
              </div>
            </div> 
              <p style={{marginBottom: "15px"}}>{comment.body}</p>
          </div>    
          {isInputVisible ? 
            <div ref={refWrapper}>
              <Input thread={thread} parentId={comment.comment_id} handleClose={handleInputClose} placeholderText={`@ ${comment.username}`} /> 
            </div> : null}
          {isInputVisible ? 
            <IconButton onClick={onReplyClick} className="reply-button" size="small">
              <CloseIcon className="reply-icon" />
              <p id="reply-text">Close</p>
            </IconButton> : 
            <IconButton onClick={onReplyClick} className="reply-button" size="small">
              <ChatBubbleIcon className="reply-icon" />
              <p id="reply-text">Reply</p>
            </IconButton>}
        </div>
      </div>
    </>
  );
};

export default CommentItem;