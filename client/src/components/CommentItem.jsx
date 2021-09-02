import React, { useContext, useState, useEffect, useRef } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CloseIcon from '@material-ui/icons/Close';
import dateFormat from "dateformat"
import Input from "./Input"
import { UserContext } from "../context/UserContext";
import "../stylesheets/Comment.css";


const CommentItem = ({ comment, originalPoster, thread }) => {
  const {setIsSignupOpen, user, isLoggedIn} = useContext(UserContext)
  const [isInputVisible, setIsInputVisible] = useState(false)
  const refWrapper = useRef(null)

  const votes = (a, b) => {
    return a - b;
  };

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

  const OPRender = originalPoster === comment.username ? "op-flag" : "hidden";

  const replyRender = comment.parent_comment_id ? "is-reply-flag" : "hidden";

  return (
    <>
      <div className="convo-container" >
        <div className="column-1">
          <IconButton id="upvote" size="small">
            <ArrowUpwardIcon className="arrow-button" />
          </IconButton>
          <IconButton id="downvote" size="small">
            <ArrowDownwardIcon className="arrow-button" />
          </IconButton>
          <div className="vertical-line"></div>
        </div>
        <div className="column-2">
          <p className="comment-heading">
          {<span className={OPRender}>OP </span>}{`${comment.username} • ${dateFormat(comment.created_at,
            "mmmm dS, yyyy, h:MM TT"
          )} • ⤮ ${votes(comment.upvotes, comment.downvotes)}`}
          </p>
          <div className="comment-box" >
            <div className={replyRender}>{comment.parent_username} posted: 
              <div className="reply-body">
                <p>{comment.parent_comment_body}</p>
              </div>
            </div> 
              <p style={{marginBottom: "15px"}}>{comment.body}</p>
          </div>    
          {isInputVisible ? 
            <div ref={refWrapper}>
              <Input thread={thread} parentId={comment.comment_id} placeholderText={`@ ${comment.username}`} /> 
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