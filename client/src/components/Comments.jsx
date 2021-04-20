import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import "../stylesheets/Comment.css";
const comments = require("../comments.json");

const Comments = () => {
  // we should probably add a comments object to featuredThread in state,
  // import it here, and map that sumbitch below. For now, I'm importing
  // the comments.json file

  const votes = (a, b) => {
    return a - b;
  };

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} {...comment} className="convo-container">
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
              {comment.userId} • {comment.createdAt} • ⤮{" "}
              {votes(comment.upvotes, comment.downvotes)}
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
