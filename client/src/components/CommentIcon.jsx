import React from "react";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const CommentIcon = ({ commentCount, onClick }) => {
  return (
    <>
      <ChatBubbleIcon className="icon" fontSize="small" onClick={onClick} />
      <span className="iconCount">{commentCount}</span>
    </>
  );
};

export default CommentIcon;
