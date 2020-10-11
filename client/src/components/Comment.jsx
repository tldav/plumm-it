import React from "react";
import ChatBubbleOutlineTwoToneIcon from "@material-ui/icons/ChatBubbleOutlineTwoTone";

const Comment = ({ comments }) => {
  return (
    <>
      <ChatBubbleOutlineTwoToneIcon
        className="icon"
        fontSize="small"
        // onClick={() => console.log("open comment threads")}
      />
      <span className="iconCount">{comments}</span>
    </>
  );
};

export default Comment;
