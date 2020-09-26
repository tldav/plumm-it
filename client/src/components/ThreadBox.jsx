import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ChatBubbleOutlineTwoToneIcon from "@material-ui/icons/ChatBubbleOutlineTwoTone";
import "../stylesheets/ThreadBox.css";

const ThreadBox = (props) => {
  return (
    <div className="stage">
      <p id="authorDiv">
        <span id="author">{props.author}</span>
        {props.date}
      </p>
      <h3>{props.threadTitle}</h3>
      <p>{props.body}</p>
      <div id="iconDiv">
        <ThumbUpOutlinedIcon fontSize="small" />
        <span className="threadIcon">{props.upvotes}</span>
        <ThumbDownOutlinedIcon fontSize="small" />
        <span className="threadIcon">{props.downvotes}</span>
        <ChatBubbleOutlineTwoToneIcon fontSize="small" />
        <span>{props.comments}</span>
      </div>
    </div>
  );
};

export default ThreadBox;
