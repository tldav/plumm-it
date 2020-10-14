import React from "react";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const Comment = ({ comments, onClick }) => {
  return (
    <>
      <ChatBubbleIcon className="icon" fontSize="small" onClick={onClick} />
      <span className="iconCount">{comments}</span>
    </>
  );
};

export default Comment;
