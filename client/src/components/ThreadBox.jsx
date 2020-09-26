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
        <ThumbUpOutlinedIcon
          className="icon"
          fontSize="small"
          onClick={() => console.log("add upvote to state")}
        />
        <span className="iconCount">{props.upvotes}</span>
        <ThumbDownOutlinedIcon
          className="icon"
          fontSize="small"
          onClick={() => console.log("add downvote to state")}
        />
        <span className="iconCount">{props.downvotes}</span>
        <ChatBubbleOutlineTwoToneIcon
          className="icon"
          fontSize="small"
          onClick={() => console.log("open comment threads")}
        />
        <span className="iconCount">{props.comments}</span>
      </div>
    </div>
  );
};

export default ThreadBox;
