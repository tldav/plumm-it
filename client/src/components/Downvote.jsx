import React from "react";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

const Downvote = ({ downvotes }) => {
  return (
    <>
      <ThumbDownOutlinedIcon
        className="icon"
        fontSize="small"
        // onClick={addDownVote}
      />
      <span className="iconCount">{downvotes}</span>
    </>
  );
};

export default Downvote;
