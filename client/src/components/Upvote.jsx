import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";

const Upvote = ({ upvotes }) => {
  return (
    <>
      <ThumbUpOutlinedIcon
        className="icon"
        fontSize="small"
        // onClick={onClick}
      />
      <span className="iconCount">{upvotes}</span>
    </>
  );
};

export default Upvote;
