import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import dateFormat from "dateformat"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import "../stylesheets/Comment.css";

const Comments = ({comments}) => {
  const votes = (a, b) => {
    return a - b;
  };

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.comment_id} className="convo-container" >
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
            <p className="heading">
            {`${comment.username} • ${dateFormat(comment.created_at,
              "dddd, mmmm dS, yyyy, h:MM TT"
            )} • ⤮ ${votes(comment.upvotes, comment.downvotes)}`}
            </p>
            <p>{comment.body}</p>
            <IconButton className="reply-button" size="small">
              <ChatBubbleIcon className="reply-icon" />
              <p id="reply-text">Reply</p>
            </IconButton>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
